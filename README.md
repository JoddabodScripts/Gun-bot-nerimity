# Nerimity Gun Bot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![Nerimity.js](https://img.shields.io/badge/nerimity.js-v1.0.0-blue)](https://github.com/nerimity/nerimity.js)

A fun Nerimity bot that generates meme images by adding a gun emoji over user avatars. Built with the official `@nerimity/nerimity.js` SDK.

## Features

- `/gun [@:user]` command to generate gun memes instantly
- Fetches user avatars from Nerimity CDN
- Composites a gun image over avatars using Sharp
- Uploads to Catbox for easy sharing
- Fast and responsive
- Built-in error handling

## Prerequisites

- Node.js (v16 or higher recommended)
- A Nerimity bot token ([Get one here](https://nerimity.com))
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/JoddabodScripts/Gun-bot-nerimity.git
cd Gun-bot-nerimity
```

2. Install dependencies:
```bash
npm install
```

3. Configure your bot:

Create a `.env` file in the root directory:
```env
NERIMITY_TOKEN=your_nerimity_bot_token_here
```

You can also copy from the example:
```bash
cp .env.example .env
```

4. Run the bot:
```bash
npm start
```

Or in development mode with auto-restart:
```bash
npm run dev
```

## Usage

Once the bot is running and online, you can use it in any Nerimity server where it's been added:

### Commands

**`/gun [@:userid]`** - Generate a gun meme with a user's avatar

**Example:**
```
/gun [@:435634564563456]
```

**What happens:**
1. Bot fetches the mentioned user's avatar
2. Resizes avatar to 300x300px
3. Overlays a 256x256px gun image in the bottom-right corner
4. Uploads the result to Catbox
5. Replies with the shareable image URL

### Demo

```
User: /gun [@:123456789]
Bot: https://files.catbox.moe/abc123.png
```

## Project Structure

```
nerimity-gun-bot/
├── index.js              # Main bot logic and command handler
├── create-gun.js         # Gun image generator utility
├── gun.png               # Gun overlay image
├── package.json          # Project dependencies and scripts
├── .env                  # Environment configuration (not in repo)
├── .env.example          # Example environment file
├── README.md             # This file
├── LICENSE               # MIT License
└── CONTRIBUTING.md       # Contribution guidelines
```

## Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NERIMITY_TOKEN` | Yes | Your Nerimity bot authentication token |

## Dependencies

- **[@nerimity/nerimity.js](https://github.com/nerimity/nerimity.js)** (^1.0.0) - Official Nerimity bot SDK
- **[sharp](https://sharp.pixelplumbing.com/)** (^0.33.5) - High-performance image processing
- **[axios](https://axios-http.com/)** (^1.15.2) - HTTP client for Catbox uploads
- **[form-data](https://github.com/form-data/form-data)** (^4.0.5) - Multipart form data handling
- **[dotenv](https://github.com/motdotla/dotenv)** (^16.4.5) - Environment variable management

## Development

Want to contribute? Check out our [Contributing Guide](CONTRIBUTING.md)!

### Local Development

```bash
# Install dependencies
npm install

# Run in development mode (with auto-restart)
npm run dev

# Run in production mode
npm start
```

## Error Handling

The bot handles various error cases gracefully:

- **User not found** - Returns "User not found" message
- **No avatar** - Returns "No avatar" if the user hasn't set an avatar
- **Upload failures** - Catches and reports upload errors
- **Image processing errors** - Handles Sharp processing errors

## Troubleshooting

### Bot doesn't respond to commands
- Verify your `NERIMITY_TOKEN` is correct in `.env`
- Check that the bot is online in your Nerimity server
- Ensure the bot has permission to read messages and send responses

### "User not found" error
- Verify you're using the correct user ID format: `[@:userid]`
- Make sure the user exists in the server

### Image processing fails
- Ensure Sharp is properly installed: `npm install sharp`
- Check that `gun.png` exists in the project root
- Verify the user's avatar URL is accessible

### Dependencies won't install
- Update Node.js to v16 or higher
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Nerimity.js](https://github.com/nerimity/nerimity.js)
- Image processing powered by [Sharp](https://sharp.pixelplumbing.com/)
- Image hosting via [Catbox](https://catbox.moe/)

## Contributing

Contributions, issues, and feature requests are welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get started.

## Support

If you have questions or need help:
- Open an issue on GitHub
- Check existing issues for solutions

---

Made with ❤️ for the Nerimity community
