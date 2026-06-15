# Nerimity Gun Bot

A fun Nerimity bot that generates meme images by adding a gun emoji over user avatars.

## Features

- `/gun [@:user]` command to generate gun memes
- Fetches user avatars from Nerimity CDN
- Composites a gun image over the avatar
- Uploads to Catbox and returns the shareable URL
- Built with `@nerimity/nerimity.js` SDK

## Prerequisites

- Node.js (v16 or higher recommended)
- A Nerimity bot token
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the bot:
```bash
npm start
```

## Configuration

Copy the .env.example file into .env and fill out the bot token

```env
NERIMITY_TOKEN=your_nerimity_bot_token_here
```

## Usage

Start the bot:

```bash
npm start
```

Or in development mode:

```bash
npm run dev
```

### Commands

- `/gun [@:userid]` - Mention a user to generate a gun meme with their avatar

Example:
```
/gun [@:435634564563456]
```

The bot will:
1. Fetch the mentioned user's avatar
2. Resize it to 300x300px
3. Add a 256x256px gun image in the bottom-right corner
4. Upload to Catbox
5. Reply with the image URL

## Project Structure

```
gun/
├── index.js          # Main bot logic
├── create-gun.js     # Generate placeholder gun image
├── gun.png           # Gun image overlay
├── package.json      # Dependencies
└── README.md         # This file
```

## Dependencies

- `@nerimity/nerimity.js` - Nerimity bot SDK
- `sharp` - Image processing
- `axios` - HTTP client for Catbox upload
- `form-data` - Multipart form data for uploads
- `dotenv` - Environment variable management


## Error Handling

- Returns "User not found" if mentioned user doesn't exist
- Returns "No avatar" if user has no avatar set
- Catches and reports other errors with message slice

## License

MIT
