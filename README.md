# Discord.ts - Discord API Wrapper for Bun

## Introduction

Discord.ts is a powerful and user-friendly Discord API wrapper designed specifically for Bun, a popular javascript runtime. With Discord.ts, you can easily interact with the Discord API and build feature-rich Discord bots or applications using TypeScript and Bun.

## Features

- **Simplified API interactions:** Discord.ts provides an intuitive and simplified interface for interacting with the Discord API. It handles the underlying HTTP requests and provides easy-to-use methods for common operations such as sending messages, managing guilds, and handling events.

- **Type safety and autocompletion:** Built with the TypeScript programming language, Discord.ts leverages the static typing system to provide type safety and autocompletion support. This ensures that your code is free of common runtime errors and allows for faster development with fewer bugs.

- **Type-Oriented architecture:** Discord.ts follows an event-driven architecture, allowing you to easily handle Discord events such as message updates, member joins, and voice state changes. You can register event listeners and perform custom actions based on these events.

- **Comprehensive documentation and examples:** We provide comprehensive documentation and examples to help you get started with Discord.ts quickly. The documentation covers installation, configuration, usage, and showcases various use cases and best practices.

## Installation

To start using Discord.ts in your Bun project, follow these simple steps:

1. Open your project in your preferred code editor.
2. Open the terminal and navigate to your project's directory.
3. Run the following command to install Discord.ts:

   ```bash
   bun add discord.ts
   ```

4. Once the installation is complete, you can import and use Discord.ts in your Bun code.

## Getting Started

Here's a basic example to help you get started with Discord.ts:

```typescript
import { Types } from 'discord.ts';

// Create a new bot instance
const bot = new Bot();

// Event listener for when the bot is ready
bot.on('ready', () => {
  console.log(`Bot is ready!`);
});

// Event listener for incoming messages
const ping: SimpleSlashCommand = {
  content = "Ping Pong!"
  reply = "Pong"
}

// Log in to the Discord API
bot.connect('YOUR_DISCORD_BOT_TOKEN');
```

Make sure to replace `'YOUR_DISCORD_BOT_TOKEN'` with your actual Discord bot token.

## Contributing

We welcome contributions from the community to enhance and improve Discord.ts. If you have any bug reports, feature requests, or pull requests, please submit them to our [GitHub repository](https://github.com/Lucrative-Software/Discord.ts).

Before submitting a pull request, please ensure that you have read and adhered to our contributing guidelines.

## License

Discord.ts is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it according to the terms of the license.

## Support

If you need any assistance or have any questions regarding discord.ts, you can reach out to our community on our [Official Discord Server](https://discord.gg/schycsxmnb).

We hope that Discord.ts simplifies your Discord bot development experience with Bun. Happy coding!
