# 🧩 X Username Emoji Tagger (Firefox Extension)

This is a minimalist Firefox WebExtension that adds custom emojis next to usernames on [X.com](https://x.com) (formerly Twitter).

### ✅ Features
- Adds emoji next to display names in:
  - Timeline posts
  - Replies
  - Profile header
- Match by handle (case-insensitive, no @)
- Lightweight and CSP-safe

### 📦 Install (temporary in Firefox)
1. Open `about:debugging` → **This Firefox**
2. Click **Load Temporary Add-on**
3. Select the `manifest.json` file in this folder

### ✏️ Customize
Edit `emojiTagger.js` and update the `emojiMap` like so:

```js
const emojiMap = {
  realscottritter: '🛡️',
  elonmusk: '🚀',
  jack: '🍔'
};

