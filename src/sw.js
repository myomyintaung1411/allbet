// import { precacheAndRoute } from 'workbox-precaching'
//  self.addEventListener('message', (event) => {
  //     if (event.data && event.data.type === 'SKIP_WAITING')
  //       self.skipWaiting()
  //   })
  // // self.__WB_MANIFEST is default injection point
  // precacheAndRoute(self.__WB_MANIFEST)
  
  
import { registerRoute } from 'workbox-routing'
import {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst
} from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
 import { precacheAndRoute,cleanupOutdatedCaches, } from 'workbox-precaching'

 self.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SKIP_WAITING')
        self.skipWaiting()
    })

   precacheAndRoute(self.__WB_MANIFEST)




console.log(self.__WB_MANIFEST,"hello from sw.js *****************")

// registerRoute(
//   ({ request }) => request.mode === 'navigate',
//   new NetworkFirst({
//     cacheName: 'views',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200]
//       })
//     ]
//   })
// )

// registerRoute(
//   ({ request }) =>
//     request.destination === 'style' ||
//     request.destination === 'script' ||
//     request.destination === 'worker' ||
//     request.destination === 'font',
//   new StaleWhileRevalidate({
//     cacheName: 'assets',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200]
//       })
//     ]
//   })
// )

registerRoute(
  ({ request }) => request.destination === 'image',
  new NetworkFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 10
      })
    ]
  })
)