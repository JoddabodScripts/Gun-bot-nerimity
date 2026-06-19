# Contributing to Nerimity Gun Bot

Thank you for considering contributing to Nerimity Gun Bot! This document provides guidelines for contributing to the project.

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- Git
- A Nerimity bot token for testing

### Setup for Development

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/JoddabodScripts/Gun-bot-nerimity.git
cd nerimity-gun-bot
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file with your bot token:
```env
NERIMITY_TOKEN=your_test_bot_token_here
```

5. Run the bot in development mode:
```bash
npm run dev
```

## Development Guidelines

### Code Style
- Use ES6+ module syntax (`import`/`export`)
- Use async/await for asynchronous operations
- Include meaningful comments for complex logic
- Keep functions focused and single-purpose
- Use descriptive variable and function names

### Project Structure
- `index.js` - Main bot logic and command handling
- `create-gun.js` - Utility scripts
- `gun.png` - Static assets
- `commands/` - Future command modules (if expanding)

### Making Changes

1. Create a new branch for your feature or fix:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes following the code style guidelines

3. Test your changes thoroughly:
   - Run the bot locally
   - Test with different user scenarios
   - Verify error handling works correctly

4. Commit your changes with clear commit messages:
```bash
git commit -m "Add: description of your changes"
```

Use commit prefixes:
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for improvements to existing features
- `Refactor:` for code restructuring
- `Docs:` for documentation changes

## Pull Request Process

1. Push your branch to your fork:
```bash
git push origin feature/your-feature-name
```

2. Open a Pull Request on GitHub with:
   - Clear title describing the change
   - Description of what changed and why
   - Reference to any related issues
   - Screenshots/examples if applicable

3. Wait for review and address any feedback

4. Once approved, your PR will be merged

## Reporting Bugs

Use the GitHub issue tracker to report bugs. Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Your environment (Node.js version, OS)
- Error messages or logs

## Suggesting Features

Feature suggestions are welcome! Open an issue with:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach (if you have ideas)

## Testing

Before submitting a PR:
- Test the bot with various commands
- Verify error handling for edge cases
- Check that existing functionality still works
- Test with users who have/don't have avatars

## Code Review

All submissions require review. We look for:
- Code quality and readability
- Proper error handling
- Performance considerations
- Security best practices
- Compatibility with existing code

## Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Reach out to the maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
