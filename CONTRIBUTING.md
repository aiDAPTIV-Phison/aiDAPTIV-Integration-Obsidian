# Contributing to aiDAPTIV Copilot for Obsidian

First off, thank you for considering contributing to aiDAPTIV Copilot for Obsidian!

## How Can I Contribute?

### Reporting Bugs or Suggesting Enhancements

Before submitting a bug report or suggestion, please check the [issues](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/issues) page for a list of currently known issues to ensure the bug has not already been reported. If it's a new bug or suggestion, create an issue and provide the following information:

- Use a clear and descriptive title.
- Describe the exact steps which reproduce the problem in as much detail as possible.
- Provide specific examples to demonstrate the steps.
- Describe the behavior you observed after following the steps, pointing out what exactly is the problem.
- Explain which behavior you expected to see instead and why.
- Include screenshots or animated GIFs showing you following the described steps and clearly demonstrating the problem.

### Your First Code Contribution

Unsure where to begin? You can start by looking through the `help-wanted` issues on our [issue tracker](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/issues).

### Pull Requests

The process described here aims to:

- Maintain the quality of aiDAPTIV Copilot for Obsidian.
- Fix problems that are important to users.
- Engage the community in working towards the best possible plugin.
- Enable a sustainable system for maintainers to review contributions.

Please follow these steps to have your contribution considered by the maintainers:

1. Ensure the code adheres to a clean style consistent with the existing code.
2. Thoroughly test your changes before submitting.
3. Be descriptive in your pull request, linking to the issue it addresses, and showing screenshots demonstrating the change.
4. Once you receive feedback, update the code accordingly to address them before your pull request can be ultimately accepted.

### How to Set Up Dev Environment

Here is a great [writeup by Daniel Haven](https://medium.com/gitconnected/how-to-set-up-the-ideal-obsidian-plugin-development-workflow-b222fe72280f) on the best practices for setting up your dev environment for Obsidian plugins.

To set up this project:

1. Fork the [repo](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian).
2. Create a vault just for development.
3. Clone the forked repo into your vault's `plugins` folder.
4. Run `npm install` to install all dependencies.
5. Install the recommended VS Code extensions (Prettier and ESLint).
6. Ensure your editor respects the `.editorconfig` and Prettier settings.
7. Run `npm run build` to build the plugin.
8. Before committing, run `npm run format` to ensure all files are properly formatted.
9. When you are ready to make a pull request, ensure to make your changes in **a branch on your fork**, and then submit a pull request to the **main repo**.

Try to be descriptive in your branch names and pull requests. Happy coding!

## Prompt Testing

If you are making prompt changes, make sure to run the integration tests using the following steps:

First create a `.env.test` file in the root directory with your API keys:

```
GEMINI_API_KEY=your_api_key_here
```

Then run the integration tests:

```
npm run test:integration
```

## Manual Testing Checklist

This is a list of items to manually test after any non-trivial code change. Test the items relevant to your code change.

First, **turn on debug mode in settings**, and open the dev console.

### Test Fresh Install

- To ensure any **new users** can use the plugin on a **fresh install**, manually delete the `data.json` file in the plugin directory, disable the plugin in Obsidian, and re-enable it, enter the API key and other API key(s) to see if **onboarding** is working.

### Chat Mode

- Switch the model and check if the log has the new model key.
- Test model selection: Ask the model "what company trained you" to double check.
- Test chat memory: Tell the model your name, and in a turn or two ask "what's my name" to ensure chat memory is working.
- Use `[[note title]]` in chat and see if the model can access the content.

### Vault QA Mode (with a small test vault)

- Use the "Refresh index" button and see if it properly starts indexing.
- After indexing is successful, ask a specific question where the answer is in your docs.

### Settings

- If you updated model logic, test adding/deleting a custom model, whether you can use a new model in chat correctly.
- Switch the embedding model and click "refresh index" to see if it starts from scratch.

### Copilot Commands

- Select text in a note and apply a built-in one like "translation" or a custom one you have as Custom Prompts.
- Try the `/` custom prompt.

## Getting Help

- **GitHub Issues**: [Submit an issue](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/issues)

Thank you for contributing to aiDAPTIV Copilot for Obsidian!
