// Slothdoku offline cache. The page loads fresh when online (so updates show up),
// and falls back to the saved copy when offline. Bump VERSION to clear old caches.
const VERSION = 'slothdoku-v21';
const CORE = ['/games/slothdoku/', '/games/slothdoku/manifest.webmanifest', '/games/slothdoku/icon-192.png', '/games/slothdoku/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const url = new URL(r.url);
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (url.origin !== location.origin && !isFont) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put('/games/slothdoku/', c)); return res; })
      .catch(() => caches.match('/games/slothdoku/')));
    return;
  }
  e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res.ok || res.type === 'opaque') { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); } return res; })));
});
