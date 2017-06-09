const version = 'v1.37::';
const staticCacheName = `${version}static`;
const pagesCacheName = `${version}pages`;
const offlinePages = [
  '/',
];

function updateStaticCache() {
  return caches.open(staticCacheName).then((cache) => {
    return cache.addAll([
      '/',
      '/_include/js/main.min.js',
      '/_include/css/main.min.css',
      '/offline.html',
      '/404.html',
    ]);
  });
}

function stashInCache(cacheName, request, response) {
  caches.open(cacheName).then(cache => cache.put(request, response));
}


// Remove caches whose name is no longer valid
function clearOldCaches() {
  return caches.keys().then((keys) => {
    return Promise.all(keys
        .filter(key => key.indexOf(version) !== 0)
        .map(key => caches.delete(key)),
    );
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(updateStaticCache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clearOldCaches().then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  let request = event.request;
  let url = new URL(request.url);

  // Ignore non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // For HTML requests, try the network first, fall back to the cache, finally the offline page
  if (request.headers.get('Accept').indexOf('text/html') !== -1) {
    event.respondWith(fetch(request).then((response) => {
      // NETWORK
      // Stash a copy of this page in the pages cache
      let copy = response.clone();
      if (offlinePages.includes(url.pathname) || offlinePages.includes(url.pathname + '/')) {
        stashInCache(staticCacheName, request, copy);
      } else {
        stashInCache(pagesCacheName, request, copy);
      }
      return response;
    }).catch(() => {
      // CACHE or FALLBACK
      return caches.match(request).then(response => response || caches.match('/offline.html'));
    }),
    );
    return;
  }

  // For non-HTML requests, look in the cache first, fall back to the network
  event.respondWith(caches.match(request).then(response => {
    // CACHE
    return response || fetch(request).then(response => {
      // NETWORK
      return response;
    });
  }),
  );
});