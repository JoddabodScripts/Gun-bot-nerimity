import { Client, Events } from "@nerimity/nerimity.js";
import dotenv from "dotenv";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import FormData from "form-data";
import axios from "axios";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GUN_PATH = path.join(__dirname, "gun.png");

const client = new Client();

async function uploadToCatbox(buffer) {
  const formData = new FormData();
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", Buffer.from(buffer), "gun.png");

  const res = await axios.post("https://catbox.moe/user/api.php", formData, {
    headers: { ...formData.getHeaders(), "User-Agent": "Mozilla/5.0" }
  });
  const url = res.data.trim();
  if (!url.startsWith("https://")) throw new Error(url.slice(0, 500));
  return url;
}

const SIZE = 300;
const GUN_SIZE = 256;

async function compositeGunImage(targetUser) {
  const avatarPath = targetUser.avatar;
  console.log("avatarPath:", avatarPath);
  const avatarURL = avatarPath 
    ? `https://cdn.nerimity.com/${avatarPath}`
    : null;
  console.log("avatarURL:", avatarURL);
  
  if (!avatarURL) throw new Error("No avatar");
  
  const avatarRes = await fetch(avatarURL);
  console.log("fetch status:", avatarRes.status);
  const avatarBuffer = Buffer.from(await avatarRes.arrayBuffer());
  console.log("avatarBuffer length:", avatarBuffer.length);
  if (!avatarBuffer.length) throw new Error("Empty avatar buffer");

  const resizedAvatar = await sharp(avatarBuffer).resize(SIZE, SIZE).toBuffer();
  const resizedGun = await sharp(GUN_PATH).resize(GUN_SIZE).toBuffer();

  const output = await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  })
  .composite([
    { input: resizedAvatar, top: 0, left: 0 },
    { input: resizedGun, top: SIZE - GUN_SIZE, left: SIZE - GUN_SIZE }
  ])
  .png()
  .toBuffer();

  console.log("output length:", output.length);
  return output;
}

client.on(Events.Ready, () => {
  console.log(`Connected as ${client.user?.username}!`);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.user.id === client.user?.id) return;

  const content = message.content?.trim() || "";
  
  if (content.startsWith("/gun")) {
    const mentionMatch = content.match(/\[@:([^\]]+)\]/);
    if (!mentionMatch) {
      await message.reply("Usage: /gun [@:user]");
      return;
    }

    const targetUserId = mentionMatch[1];
    console.log("targetUserId:", targetUserId);
    const targetUser = client.users.cache.get(targetUserId);
    console.log("targetUser:", targetUser);
    
    if (!targetUser) {
      await message.reply("User not found");
      return;
    }

    try {
      const buffer = await compositeGunImage(targetUser);
      console.log("got buffer");
      const url = await uploadToCatbox(buffer);
      console.log("got url:", url);
      await message.reply(url);
    } catch (err) {
      console.error("Error:", err);
       await message.reply("Error: " + err.message.slice(0, 500));
    }
  }
});

client.login(process.env.NERIMITY_TOKEN);
