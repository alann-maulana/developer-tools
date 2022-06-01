'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "b22b8c2384bdae9cef23bed0b736ef0e",
"main.dart.js_13.part.js": "f71e1452f432a1257882259687bbeb15",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"main.dart.js_45.part.js": "dc53e3521dc3b63c674a024a1ff1947c",
"main.dart.js_10.part.js": "1f997d9414fe32a5bb69e2dbf06af643",
"main.dart.js_3.part.js": "30ef31c50e3631241a563ae99137d553",
"main.dart.js_19.part.js": "eeb0d0d4d3c5ea45b05e8d848a7ba66c",
"main.dart.js_16.part.js": "c26aaa036aa2b2321a53d33bf2f0094a",
"main.dart.js_44.part.js": "9f05b00d32dfb473df7701b650759703",
"main.dart.js_26.part.js": "509460bb20c2906fc4eeb89584f6e570",
"main.dart.js_31.part.js": "099e6db19bff7aa341d9117ec8ecc967",
"main.dart.js_50.part.js": "f2d23513745716ab4e26c095d33d52ba",
"main.dart.js_41.part.js": "89a48d439f67ef0b188cd4918f2bfd26",
"main.dart.js_32.part.js": "7ebe8768e581f9245b15d34b074de7fb",
"main.dart.js_48.part.js": "8e43d322845cab0f07b3fa4b3a3d091f",
"main.dart.js_36.part.js": "cac3b72da6fc00eb07b625cb30895378",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"index.html": "0ffe3044bb11476a0645af6a67c64d58",
"/": "0ffe3044bb11476a0645af6a67c64d58",
"main.dart.js_14.part.js": "cb5b687dbed79cc6a28eb1a7148c17ca",
"main.dart.js_20.part.js": "e0e6808be3f386997b90ca51d911eb9d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_29.part.js": "c6481721cb59fba1c013d2c165f846b4",
"main.dart.js_37.part.js": "4cccc9e92a6b5ee4a3d74c96f2064eea",
"main.dart.js_12.part.js": "cf67fd569e32a8a3cb7862fed4fb179f",
"version.json": "01297171537a13fc1adce7fd951f54e4",
"main.dart.js_28.part.js": "4dc96321479433857bc05438be13fcc7",
"main.dart.js_30.part.js": "97e4022034db700515189bcf4d67a1b7",
"main.dart.js_25.part.js": "a672cec9ee31627c9ba372be270d6ee9",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "e5d2dd66dd42a311bb1bb426c2219557",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"main.dart.js_46.part.js": "0f7707031e61d7be99da217a8ed947ca",
"main.dart.js_34.part.js": "e1e49f8cd02c594e12b7f8ba515584ff",
"main.dart.js_22.part.js": "ab6559c7cd9b9aa11aa4202524ee7446",
"manifest.json": "19971e5e6df875bc88815efa6b80d7c7",
"main.dart.js_38.part.js": "07a79798cacfe7890d329033d517d104",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_24.part.js": "f638d545b96070ef859476797c39ab7f",
"main.dart.js_7.part.js": "0ac34581c55d11ed5788b41343aa20e9",
"main.dart.js_6.part.js": "8fce5b4009da29f744a184ebbc68d7a6",
"main.dart.js_1.part.js": "6a5e0d00217657ec6fe34ca52f48c062",
"main.dart.js_40.part.js": "0c590ce75982f6a961ee27c9c27ac918",
"main.dart.js_33.part.js": "9512315beb7e66002ce4ced95d61bbc7",
"main.dart.js_9.part.js": "7f0c6c3753f3cc6b6e9cb761af770c08",
"main.dart.js_2.part.js": "abf883c98b164eaf8f58faf87fb47d07"
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
