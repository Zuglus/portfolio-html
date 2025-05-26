const CACHE_NAME = 'portfolio-polina-v1.0.0';
const STATIC_CACHE = 'static-v1';
const IMAGES_CACHE = 'images-v1';

// Критические ресурсы для кеширования при установке
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/fonts/MV-SKIFER.otf',
  '/assets/fonts/Onest-Regular.ttf',
  '/assets/images/logo.svg',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

// Установка SW
self.addEventListener('install', event => {
  console.log('[SW] Установка Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Кешируем критические ресурсы');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('[SW] Установка завершена');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Ошибка установки:', error);
      })
  );
});

// Активация SW
self.addEventListener('activate', event => {
  console.log('[SW] Активация Service Worker');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== IMAGES_CACHE) {
              console.log('[SW] Удаляем старый кеш:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Активация завершена');
        return self.clients.claim();
      })
  );
});

// Стратегия кеширования
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Обрабатываем только запросы с нашего домена
  if (url.origin !== location.origin) {
    return;
  }
  
  // Стратегия для HTML страниц: Network First
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE)
            .then(cache => cache.put(request, responseClone));
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then(response => response || caches.match('/index.html'));
        })
    );
    return;
  }
  
  // Стратегия для изображений: Cache First
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGES_CACHE)
        .then(cache => {
          return cache.match(request)
            .then(response => {
              if (response) {
                return response;
              }
              
              return fetch(request)
                .then(networkResponse => {
                  // Кешируем только успешные ответы
                  if (networkResponse.status === 200) {
                    cache.put(request, networkResponse.clone());
                  }
                  return networkResponse;
                })
                .catch(() => {
                  // Возвращаем placeholder при ошибке
                  return new Response(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#04061B"/><text x="50%" y="50%" text-anchor="middle" fill="#fff" font-size="16">Изображение недоступно</text></svg>',
                    { headers: { 'Content-Type': 'image/svg+xml' } }
                  );
                });
            });
        })
    );
    return;
  }
  
  // Стратегия для остальных ресурсов: Stale While Revalidate
  event.respondWith(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.match(request)
          .then(response => {
            const fetchPromise = fetch(request)
              .then(networkResponse => {
                if (networkResponse.status === 200) {
                  cache.put(request, networkResponse.clone());
                }
                return networkResponse;
              });
            
            return response || fetchPromise;
          });
      })
  );
});

// Обработка фоновой синхронизации
self.addEventListener('sync', event => {
  console.log('[SW] Фоновая синхронизация:', event.tag);
});

// Обработка push уведомлений (для будущего использования)
self.addEventListener('push', event => {
  console.log('[SW] Push уведомление получено');
});
