# 🧩 X Username Emoji Tagger (Firefox + Chrome Extension)

This is a minimalist browser extension that adds custom emojis next to usernames on [X.com](https://x.com) (formerly Twitter).

---

### ✅ Features

- Adds emoji next to display names in:
  - Timeline posts
  - Replies
  - Profile header
- Match by handle (case-insensitive, no `@`, underscores ignored)
- Lightweight and CSP-safe
- Works in **Firefox** and **Chrome**

---

### 🧪 Local Install

#### 🦊 Firefox

- 🧩 Download: [`x-emoji-tagger.xpi`](./x-emoji-tagger.xpi)
- Go to: `about:addons`
- Click ⚙️ → **Install Add-on From File**
- Select the `.xpi` file

Or for **temporary installs** (dev testing):

1. Open `about:debugging` → **This Firefox**
2. Click **Load Temporary Add-on**
3. Select `manifest.json`

#### 🧩 Chrome

- 🧩 Download: [`chromedd.crx`](./chromedd.crx)
- Open `chrome://extensions`
- Turn on **Developer Mode**
- Drag-and-drop the `.crx` file into the window

---

### ✏️ Customize

Edit `emojiTagger.js` and update the emoji map:

```js
const emojiMap = {
  realscottritter: '🛡️',
  elonmusk: '🚀',
  jack: '🍔',
  0hour1: '❤️'
};
````

Handles are matched in lowercase; underscores and casing are ignored.

---

### 🛠️ Build Instructions

* Firefox `.xpi`: built using [web-ext sign](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
* Chrome `.crx`: built using [`crx3`](https://github.com/ahwayakchih/crx3)

Ask ChatGPT for the full build pipeline script if needed.

---

### 🧙 License

MIT. Customize freely.

```



