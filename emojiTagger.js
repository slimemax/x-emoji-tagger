(() => {
  // Map: handle (lower‑case, no @) → emoji
  const emojiMap = {
    realscottritter: '🛡️',
    elonmusk:        '🚀',
    gunthereagleman: '✡️',
    defiyantlyfree: '✡️',
    shawn_farash: '✡️',
    catturd2: '✡️',
    jack:            '🍔'
    // add more …
  };

  // Inject emoji once per element
  function inject(node, emoji) {
    if (node.dataset.emojiInjected) return;
    node.textContent += ` ${emoji}`;
    node.dataset.emojiInjected = 'true';
  }

  // Tag every display‑name link inside tweets, replies, etc.
  function scanTimeline(root=document) {
    root.querySelectorAll('[data-testid="User-Name"] a[href^="/"]').forEach(a => {
      const m = a.pathname.match(/^\/([^/?#]+)/);
      if (!m) return;
      const handle = m[1].toLowerCase();
      const emoji = emojiMap[handle];
      if (emoji) inject(a.querySelector('span') || a, emoji);
    });
  }

  // Tag the profile header (no link there, just a span)
  function scanProfileHeader() {
    const match = location.pathname.match(/^\/([^/?#]+)/);
    if (!match) return;
    const handle = match[1].toLowerCase();
    const emoji = emojiMap[handle];
    if (!emoji) return;
    // header display name span has data-testid="UserName" (note no dash)
    const header = document.querySelector('[data-testid="UserName"] span');
    if (header) inject(header, emoji);
  }

  // Initial pass
  scanTimeline();
  scanProfileHeader();

  // Observe DOM changes (infinite scroll & when navigating to a profile via X’s SPA router)
  const obs = new MutationObserver(muts => {
    muts.forEach(m => m.addedNodes.forEach(n => {
      if (n.nodeType !== 1) return;
      scanTimeline(n);
      scanProfileHeader(); // quick call; cheap if already injected
    }));
  });
  obs.observe(document.body, { childList: true, subtree: true });
})();
