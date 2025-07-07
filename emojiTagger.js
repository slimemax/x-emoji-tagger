(() => {
  // Normalize handle function (remove @, lowercase, strip non-alphanum)
  const normalize = s => s.replace(/^@/, '').toLowerCase();

  // Map: normalized handle → emoji
  const emojiMapRaw = {
    'realscottritter': '🛡️',
    'elonmusk':        '🚀',
    'gunthereagleman': '✡️',
    'defiyantlyfree': '✡️',
    'shawn_farash': '✡️',
    'catturd2': '✡️',
    'michaeljknowles': '✡️',
    'lexfridman': '✡️',
    'lauraloomer': '✡️',
    'charliekirk11': '✡️',
    'jack':            '🍔',
    '0H0UR1__': '✡️'  // note: key will get normalized
    // add more …
  };

  const emojiMap = {};
  for (const key in emojiMapRaw) {
    emojiMap[normalize(key)] = emojiMapRaw[key];
  }

  function inject(node, emoji) {
    if (node.dataset.emojiInjected) return;
    node.textContent += ` ${emoji}`;
    node.dataset.emojiInjected = 'true';
  }

  function scanTimeline(root = document) {
    root.querySelectorAll('[data-testid="User-Name"] a[href^="/"]').forEach(a => {
      const m = a.pathname.match(/^\/([^/?#]+)/);
      if (!m) return;
      const handle = normalize(m[1]);
      const emoji = emojiMap[handle];
      if (emoji) inject(a.querySelector('span') || a, emoji);
    });
  }

  function scanProfileHeader() {
    const m = location.pathname.match(/^\/([^/?#]+)/);
    if (!m) return;
    const handle = normalize(m[1]);
    const emoji = emojiMap[handle];
    const el = document.querySelector('[data-testid="UserName"] span');
    if (el && emoji) inject(el, emoji);
  }

  scanTimeline();
  scanProfileHeader();

  const obs = new MutationObserver(muts => {
    muts.forEach(m => m.addedNodes.forEach(n => {
      if (n.nodeType === 1) {
        scanTimeline(n);
        scanProfileHeader();
      }
    }));
  });
  obs.observe(document.body, { childList: true, subtree: true });
})();
