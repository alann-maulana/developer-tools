'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "5887b12c694fda928f94ab5fb62003ad",
"main.dart.js_13.part.js": "f71e1452f432a1257882259687bbeb15",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"main.dart.js_45.part.js": "c15159082e4becda3e5ffce0e1db2dd8",
"main.dart.js_10.part.js": "5e0a618d1822ae89de7c40b1c810d90d",
"main.dart.js_3.part.js": "2c7323ecd73131ab9f10d41a9311b5c1",
"main.dart.js_19.part.js": "d77f8479851280d3a4438427b8922e77",
"main.dart.js_16.part.js": "8d65a10fd1ce244e2388b05656f55c6a",
"main.dart.js_44.part.js": "4434754fcab91770e5cc2569b46b370e",
"main.dart.js_26.part.js": "943ef2a3e6fc06260c13bf3efddfd086",
"main.dart.js_31.part.js": "905b93855714515a373ccbc3679090b0",
"main.dart.js_50.part.js": "bc197a64480e0615fd196e3b5a183700",
"main.dart.js_41.part.js": "a66bb199e1658f2b931e44e8e6b30743",
"main.dart.js_32.part.js": "e567fff0392f58f01bd08f33dda863d3",
"main.dart.js_48.part.js": "70f31ad8e77260b5edc80aa32cee09b7",
"main.dart.js_36.part.js": "7d019f24fd161e94298b4202bae36d79",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"index.html": "a0583cbc500e5a2afa9082e6d1328949",
"/": "a0583cbc500e5a2afa9082e6d1328949",
"main.dart.js_14.part.js": "1ff4dc4c2b0dabbbc33fa4c905a25c21",
"main.dart.js_20.part.js": "caabab203af3a456861ef46c76f5c927",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_29.part.js": "c77cdba3d4184a6cb79e303aca211591",
"main.dart.js_37.part.js": "86fda6b47e7cfd56611d2a7d3c472f1d",
"main.dart.js_12.part.js": "cf67fd569e32a8a3cb7862fed4fb179f",
"version.json": "b1a8e5a77d7044dc4e9b2d000d49cf11",
"main.dart.js_28.part.js": "3c7d04687a91af2a4372baebf3be838c",
"main.dart.js_30.part.js": "73798c7fac8c3fd6875e6721cb042ae0",
"main.dart.js_25.part.js": "c136d0a0f031fb16cc0b53001192ec3e",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "e5d2dd66dd42a311bb1bb426c2219557",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"main.dart.js_46.part.js": "556557162dd9cd9ffeb53fe4b9263c0a",
"main.dart.js_34.part.js": "e1e49f8cd02c594e12b7f8ba515584ff",
"main.dart.js_22.part.js": "f9f181aeb83b500e7185d8d132882c33",
"manifest.json": "19971e5e6df875bc88815efa6b80d7c7",
"main.dart.js_38.part.js": "c4f99258403ed3333f27586261dc6bd4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_24.part.js": "fb14a6e9484c90247b80c99c2819d1e3",
"main.dart.js_7.part.js": "063b4814385ba228758bbbeb8aa90d6c",
"main.dart.js_6.part.js": "a2cf5cf58b31a951b5fb77086dc15b9d",
"main.dart.js_1.part.js": "5351a0bd4ce209fce747ef8e8a81e2d3",
"main.dart.js_40.part.js": "afe635646dc96d1168639837aa580b6f",
"main.dart.js_33.part.js": "35fdffd437240d10c3725e331e150e76",
"main.dart.js_9.part.js": "3f9f23a32f0aa0511f6d945764e80105",
"main.dart.js_2.part.js": "eebde53ff155cdf6ed04b1606e847b4d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
