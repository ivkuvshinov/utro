// Утренняя растяжка — service worker
const CACHE = 'stretch-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './exercises.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..700,30..100&family=Manrope:wght@300..700&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(resp => {
        // Cache successful same-origin and font responses
        if (resp && resp.status === 200 && (req.url.startsWith(self.location.origin) || req.url.includes('fonts.g'))) {
          const respClone = resp.clone();
          caches.open(CACHE).then(c => c.put(req, respClone)).catch(() => {});
        }
        return resp;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
