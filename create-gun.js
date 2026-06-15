import sharp from "sharp";

async function createPlaceholderGun() {
  const width = 200;
  const height = 150;
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="60" width="120" height="25" rx="3" fill="#555"/>
      <rect x="115" y="65" width="60" height="18" rx="2" fill="#444"/>
      <rect x="160" y="68" width="8" height="12" rx="1" fill="#333"/>
      <circle cx="35" cy="55" r="12" fill="#666"/>
      <rect x="10" y="85" width="60" height="15" rx="2" fill="#444"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile("gun.png");
  
  console.log("Created placeholder gun.png");
}

createPlaceholderGun();