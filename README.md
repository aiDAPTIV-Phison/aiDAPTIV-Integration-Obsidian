<h1 align="center">aiDAPTIV Copilot for Obsidian</h1>

<h2 align="center">
Phison aiDAPTIV Integration for Obsidian
</h2>

<p align="center">
  <img src="https://img.shields.io/github/v/release/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian?style=for-the-badge&sort=semver" alt="GitHub release (latest SemVer)">
</p>

<p align="center">
  <a href="https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/issues/new?template=bug_report.md">Report Bug</a> |
  <a href="https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/issues/new?template=feature_request.md">Request Feature</a>
</p>

> **Notice:** This is a modified fork of [Copilot for Obsidian](https://github.com/logancyang/obsidian-copilot) by Logan Yang, customized for Phison aiDAPTIV integration. Licensed under AGPL-3.0. See [NOTICE](./NOTICE) for attribution details.

## Overview

aiDAPTIV Copilot for Obsidian is an AI-powered in-vault assistant that integrates Phison aiDAPTIV with Obsidian. It provides chat-based vault search, web and YouTube support, powerful context processing, and agentic capabilities — all within Obsidian's workspace, keeping your data under **your** control.

## Key Features

- **Local-First Data**: Local search and storage, with full control of your data when using self-hosted models.
- **Bring Your Own Model**: Connect any OpenAI-compatible or local model to uncover insights, spark connections, and create content.
- **Multimedia Understanding**: Drop in webpages, YouTube videos, images, PDFs, EPUBs, or real-time web search for quick insights.
- **Smart Vault Search**: Search your vault with chat — no setup required. Embeddings are optional but available for semantic search.
- **Composer and Quick Commands**: Interact with your writing through chat and apply changes with 1 click.
- **Project Mode**: Create AI-ready context based on folders and tags.
- **Agent Mode**: Autonomous agent with built-in tool calling. Copilot automatically triggers vault search, web search, or other relevant tools when needed.

## Table of Contents

- [Get Started](#get-started)
  - [Install](#install)
  - [Set API Keys](#set-api-keys)
- [Usage](#usage)
  - [Chat Mode](#chat-mode)
  - [Vault QA Mode](#vault-qa-mode)
  - [Command Palette](#command-palette)
  - [Agent Mode](#agent-mode)
- [Need Help?](#need-help)
- [FAQ](#faq)

## Get Started

### Install

1. Download the latest release from the [Releases](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/releases) page.
2. Extract the archive into your vault's plugin directory: `<vault>/.obsidian/plugins/aiDAPTIV-Integration-Obsidian/`.
3. Open **Obsidian → Settings → Community plugins**.
4. Turn off **Safe mode** (if enabled).
5. Find **aiDAPTIV Copilot** in the plugin list and click **Enable**.

### Set API Keys

1. Go to **Obsidian → Settings → Copilot → Basic** and click **Set Keys**.
2. Choose your AI provider(s) (e.g., **OpenRouter, Gemini, OpenAI, Anthropic, Cohere**) and paste your API key(s).

## Usage

### Chat Mode

Use `@` to add context (notes, folders) and chat with your content.

**Example prompt:**

> _Summarize [[Q3 Retrospective]] and identify the top 3 action items for Q4 based on the notes in {01-Projects}._

### Vault QA Mode

Search across your entire vault with natural language queries.

**Example prompt:**

> _What are the recurring themes in my research regarding the intersection of AI and SaaS?_

### Command Palette

Access AI commands via `/` in the chat window or via right-click menu on selected text.

- **Add selection to chat context** — Select text and add it to context. Shortcut: `Ctrl/Cmd + L`
- **Quick Command** — Select text and apply action without opening chat. Shortcut: `Ctrl/Cmd + K`
- **Edit and Apply** — Select text and edit with one right click.
- **Create your Command** — Create custom commands in `Settings → Copilot → Command → Add Cmd`.

### Agent Mode

Copilot's agent automatically calls the right tools — no manual commands needed. Just ask, and it searches the web, queries your vault, and combines insights seamlessly.

**Example prompt:**

> _Research web and my vault and draft a note on AI SaaS onboarding best practices._

Additional agent capabilities:

- **Time-based queries** — Ask "What did I do last week?" to get precision insights from a specific time window.
- **Image understanding** — Analyze images embedded in your notes (wireframes, diagrams, screenshots).
- **Multi-source analysis** — Combine PDFs, YouTube videos, and web search results in a single prompt.

## Need Help?

- Check the [documentation](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian#readme) for setup guides and advanced features.
- If you're experiencing a bug or have a feature idea:
  - **Bug Report**
    - Use the [bug report template](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/issues/new?template=bug_report.md)
    - Enable Debug Mode in Copilot Settings → Advanced for detailed logs
    - Open the dev console to collect error messages:
      - Mac: `Cmd + Option + I`
      - Windows: `Ctrl + Shift + I`
    - Turn off all other plugins, keeping only Copilot enabled
    - Attach relevant console logs to your report
  - **Feature Request**
    - Use the [feature request template](https://github.com/aiDAPTIV-Phison/aiDAPTIV-Integration-Obsidian/issues/new?template=feature_request.md)
    - Clearly describe the feature, why it matters, and how it would help

## FAQ

<details>
  <summary><strong>Why isn't Vault search finding my notes?</strong></summary>

If you're using the Vault QA mode (or the tool <code>@vault</code>), try the following:

- Ensure you have a working embedding model from your AI model's provider (e.g. OpenAI).
- Ensure your Copilot indexing is up-to-date.
- If issues persist, run **Force Re-Index** or use **List Indexed Files** from the Command Palette to inspect what's included in the index.
- ⚠️ **Don't switch embedding models after indexing** — it can break the results.
</details>

<details>
  <summary><strong>Why is my AI model returning error code 429: 'Insufficient Quota'?</strong></summary>

Most likely this is happening because you haven't configured billing with your chosen model provider — or you've hit your monthly quota. To resolve:

- Verify your billing settings in your provider's dashboard
- Add a payment method if one isn't already on file
- Check your usage dashboard for any quota or limit warnings

If you're using a different provider, please refer to their documentation and billing policies for the equivalent steps.

</details>

<details>
  <summary><strong>Why am I getting a token limit error?</strong></summary>

Please refer to your model provider's documentation for the context window size.

⚠️ If you set a large **max token limit** in your Copilot settings, you may encounter this error.

- **Max tokens** refers to _completion tokens_, not input tokens.
- A higher output token limit means less room for input!

Behind-the-scenes prompts for Copilot commands also consume tokens, so:

- Keep your message length short
- Set a reasonable max token value to avoid hitting the cap
</details>

## Authors

Phison aiDAPTIV Team | GitHub: [aiDAPTIV-Phison](https://github.com/aiDAPTIV-Phison)

## Attribution

This project is based on [Copilot for Obsidian](https://github.com/logancyang/obsidian-copilot) by Logan Yang (Brevilabs Team), licensed under AGPL-3.0. We gratefully acknowledge the original authors and contributors.
