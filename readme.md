# 🧩 X Username Emoji Tagger (Firefox + Chrome Extension)

This is a minimalist browser extension that adds custom emojis next to usernames on [X.com](https://x.com) (formerly Twitter).

---

### ✅ Features

- Adds emoji next to display names in:
  - Timeline posts
  - Replies
  - Profile header
- Match by handle (case-insensitive, no `@`)
- Lightweight and CSP-safe
- Works in Firefox **and** Chrome

---

### 🔧 Customize

Edit `emojiTagger.js` and update the `emojiMap` like so:

```js
const emojiMap = {
  realscottritter: '🛡️',
  elonmusk: '🚀',
  jack: '🍔',
  0hour1: '❤️'
};
````

Handles are matched lowercase and underscores are ignored.

---

### 🦊 Install in Firefox (Temporary)

1. Go to `about:debugging` → **This Firefox**
2. Click **Load Temporary Add-on**
3. Select the `manifest.json` file in this folder

---

### 🧪 Install in Chrome (Local)

1. Open `chrome://extensions`
2. Turn on **Developer Mode**
3. Drag and drop the prebuilt file:
   `chromedd.crx`
   *(found in this repo)*

---

### 🛠️ Manual Build

If you're modifying the extension and want to rebuild the `.crx`:

1. Create a `.zip` of the extension contents
2. Use the [crx3 tool](https://github.com/ahwayakchih/crx3) to package it
3. Or ask ChatGPT to walk you through it again :)

---

### 🧙 License

MIT. Go wild.


