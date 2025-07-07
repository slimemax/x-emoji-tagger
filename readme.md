# 🧩 X Username Emoji Tagger (Firefox + Chrome + Brave Extension)

This is a minimalist browser extension that adds custom emojis next to usernames on [X.com](https://x.com) (formerly Twitter).

---

### ✅ Features

- Adds emoji next to display names in:
  - Timeline posts
  - Replies
  - Profile header
- Match by handle (case-insensitive, no `@`, underscores ignored)
- Lightweight and CSP-safe
- Works in **Firefox**, **Chrome**, and **Brave**

---

### 📂 Directory Structure

```

x-emoji-extension/
├── Brave/               # Manifest V3 build for Brave/Chrome (unpacked install)
│   ├── emojiTagger.js
│   └── manifest.json
├── Chrome/
│   └── chromedd.crx     # Packaged one-click CRX file for Chrome
├── Developer Files/     # Raw dev source (for signing/building)
│   ├── emojiTagger.js
│   └── manifest.json
├── FireFox/
│   └── x-emoji-tagger.xpi  # Signed Firefox extension
└── readme.md

````

---

### 🧪 Install Instructions

#### 🦊 Firefox

- 🧩 Download: [`FireFox/x-emoji-tagger.xpi`](./FireFox/x-emoji-tagger.xpi)
- Go to `about:addons`
- Click ⚙️ → **Install Add-on From File**
- Select the `.xpi` file

**Or Temporary Install:**

1. Open `about:debugging` → **This Firefox**
2. Click **Load Temporary Add-on**
3. Select `Developer Files/manifest.json`

---

#### 🧩 Chrome / Brave

**Option A — One-Click Install (Packaged):**

- 🧩 Download: [`Chrome/chromedd.crx`](./Chrome/chromedd.crx)
- Go to `chrome://extensions` or `brave://extensions`
- Enable **Developer Mode**
- Drag and drop the `.crx` file into the window

**Option B — Unpacked Install (For Dev/Testing):**

1. Go to `chrome://extensions` or `brave://extensions`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the `Brave/` folder

---

### ✏️ Customize Emoji List

Edit the file:

```js
Brave/emojiTagger.js
````

Change the `emojiMap` like so:

```js
const emojiMap = {
  realscottritter: '🛡️',
  elonmusk: '🚀',
  jack: '🍔',
  0hour1: '❤️'
};
```

> ✅ Handles are normalized: lowercase, and all non-alphanumerics removed.

---

### 🛠️ Build Notes

* **Firefox** `.xpi` built via [`web-ext sign`](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
* **Chrome** `.crx` built via [`crx3`](https://github.com/ahwayakchih/crx3)
* **Brave** version uses **Manifest V3** and runs as unpacked or ZIP-crx

Let ChatGPT help if you want CI or build automation.

---

### 🧙 License

MIT — remix and redistribute as you like.

