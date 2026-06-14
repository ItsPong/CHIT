const CACHE_NAME = 'chit-shell-v1';
const APP_SHELL = [
  '/manifest.webmanifest',
  '/icons/pwa-192x192.png',
  '/icons/pwa-512x512.png',
];

async function precacheAppShell() {
  const cache = await caches.open(CACHE_NAME);
  const response = await fetch('/');
  const html = await response.clone().text();
  const assetPaths = Array.from(
    html.matchAll(/(?:href|src)="(\/[^"]+)"/g),
    (match) => match[1]
  ).filter((path) => !path.startsWith('/sw.js'));

  await cache.put('/', response);
  await cache.addAll([...APP_SHELL, ...new Set(assetPaths)]);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAppShell());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cachedResponse) => cachedResponse || caches.match('/'))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }

        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
