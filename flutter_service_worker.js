'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fd5b5a5338a0aaaeece4334043966bcc",
"index.html": "2f5d3a1dfe8d5076df7c5c199931f287",
"/": "2f5d3a1dfe8d5076df7c5c199931f287",
"main.dart.js": "f2933781015bcab3e5a3836132c4a669",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8a88d3eab836c71f0e2a8a65a42aab93",
"assets/AssetManifest.json": "a3331e387f5a071fc9c5b11c8b05a72a",
"assets/NOTICES": "9fb87d7d706ae5e399cf8fd20be955c9",
"assets/FontManifest.json": "51cca9463feaef9b1d20f6b97712af8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/airtest-good.png": "d97755d207ce03cce24d11d2b0963b06",
"assets/assets/images/gym.svg": "05719ace10ec46e0041e3866b4abb37d",
"assets/assets/images/airtest-very-unhealthy.png": "5881b1572f300cf83872027eeb05d719",
"assets/assets/images/bgframe5-removebg.png": "6a6be9211c3b077809d70876b61774da",
"assets/assets/images/nafas-full-text.png": "821d75cee778b0c96b5a62a77418ed9b",
"assets/assets/images/airtest-unhealthy.png": "f602744254f666cbd4dee2471dccf4e0",
"assets/assets/images/airtest-moderate.png": "e74c8a6016e7a67dd504a25fffa2ca1f",
"assets/assets/images/airtest-unhealthy-sensitive.png": "bc251c224c5e3372a7ce26bd79ae4677",
"assets/assets/images/cafe.svg": "abbcf77b51849de7f65c9a4e97f4458c",
"assets/assets/images/redudance.svg": "4fb3fff58ceadedf5d23c2da75311794",
"assets/assets/images/blackairtest.png": "9fed1bd28157cbc05d97631ca7fd0b49",
"assets/assets/images/nafas-logo.png": "44373d45975e2bff748a6b0c979ebfcd",
"assets/assets/images/polutan.png": "a53b5fdb0a20d404a59429c688707a99",
"assets/assets/images/prev.svg": "5b9d0284dfbade25f56a24a2451f5c90",
"assets/assets/images/v2/airtest_red_unhelthy.png": "9cab7830b63965f28ae09553c10eb3dd",
"assets/assets/images/v2/bgheaderframe2.png": "afc0e89d6f1d1f1a42578ba353999cda",
"assets/assets/images/v2/airtest_orange%2520unhealty.png": "e34942e89b66bcbfc600029683b06414",
"assets/assets/images/v2/polutionframe3.png": "3dbd04d733216a9b7c24ada5e782c8c4",
"assets/assets/images/v2/en.svg": "9409b1f48e66c89338c835cd14cb21b3",
"assets/assets/images/v2/slideframe3_1.png": "c1e9624daa4969907f8c7a9311d80168",
"assets/assets/images/v2/slideframe3_2.png": "5c9b92d027ac155994913b75089b7415",
"assets/assets/images/v2/en.png": "bce58f26746ade8bef6c3a52214a40a6",
"assets/assets/images/v2/slideframe3_3.png": "c235a857f16bb3df921432ef501532f9",
"assets/assets/images/v2/airtest_purple_vun.png": "ab39b744a62275fa7a75603cb5a4dedd",
"assets/assets/images/v2/airtest_hazard.png": "5ebd0c5363c32293f418a91f45b9f78a",
"assets/assets/images/v2/airtest_moderate.png": "3b48fcdb276e2030cccdfdedd22aaf7b",
"assets/assets/images/v2/id.png": "bcccde68d699473cbdef3516cc617cf7",
"assets/assets/images/v2/airtest_good.png": "ce868102e106b0f80bb8b2b2e1f40d82",
"assets/assets/images/v2/bgframe4.png": "b92d17c5b268d6a3e343a4e14fb772f3",
"assets/assets/images/v2/id.svg": "28cdc886a3dac04397ccf416d05f2f56",
"assets/assets/images/v2/bgframe2.png": "07c5a63353b47b3730fb08281b5620e9",
"assets/assets/images/bgframe5-removebg1.png": "0b44e9be8d09215a10d274157f32a331",
"assets/assets/images/airtest-hazardous.png": "8c015b8aeffd0ef68a5bab4b1af2bdce",
"assets/assets/images/nafas-logo-full-text.png": "1159bd839a0dfc1545e0d8b8ff8255c3",
"assets/assets/images/certified_caz_upsize.png": "b274acac523c2eb5d65d607dc1dde0b1",
"assets/assets/images/peoplefoots.png": "55e9ee4a31933ad10ba1a9b2c669157f",
"assets/assets/images/next.svg": "0433128a6d5544dbe31c11ae0d01aeec",
"assets/assets/images/eye.png": "549b115c0f9cf68296af0272349fe48e",
"assets/assets/images/bgframe6.png": "a0a82f6f9b12c936373470ac0cc16138",
"assets/assets/images/eye.svg": "6cfa8957113563c64c52dccaa2f37e33",
"assets/assets/images/blackpure40.png": "75bc278c59aa56157465ae2de4d9c495",
"assets/assets/images/eyetransparant.svg": "564cfda70db85e2733421210cae52853",
"assets/assets/images/bgframe5.png": "2e2190224a2cbddc89c6587ade82748d",
"assets/assets/images/office.svg": "728da263b8a22002c61aed06d7e712ca",
"assets/assets/images/certified_caz.png": "f8f1d190fc2fde26b9b0c2a07b0c07db",
"assets/assets/images/electic.svg": "95478478a12a2d27cddcc383b11d9552",
"assets/assets/images/monitor.svg": "523b98aa7c08bdc24d9bfed44a4f3f9b",
"assets/assets/fonts/sf-pro-display/sf-pro-display-SemiBold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"assets/assets/fonts/sf-pro-display/sf-pro-display-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/assets/fonts/sf-pro-display/sf-pro-display-RegularItalic.ttf": "99cbc761e18e04ddbaecfe91b3be1f90",
"assets/assets/fonts/sf-pro-display/sf-pro-display-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/assets/fonts/sf-pro-display/sf-pro-display-Light.ttf": "fdd4f443a00654b709cbba595cf6cecd",
"assets/assets/fonts/sf-pro-display/sf-pro-display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/assets/fonts/sf-pro-display/sf-pro-display-Thin.ttf": "ac89cd77c5ab08dbdce4f6ac4ffe4535",
"assets/assets/fonts/sf-pro-display/sf-pro-display-SemiBoldItalic.ttf": "b6818655c11bf5907535a7f00cd06d43",
"assets/assets/fonts/sf-pro-display/sf-pro-display-ThinItalic.ttf": "cfd312e98ebda7ccc08f2babff9e9666",
"assets/assets/fonts/sf-pro-display/sf-pro-display-BoldItalic.ttf": "592b8c5f855e9fc5af4e7726fd57ee3d",
"assets/assets/fonts/sf-pro-display/sf-pro-display-Black.ttf": "53fdc56168da335fad728db05d069061",
"assets/assets/fonts/sf-pro-display/sf-pro-display-BlackItalic.ttf": "be3c2fb15f99ecd6dbd6091337f14bfb",
"assets/assets/fonts/sf-pro-display/sf-pro-display-MediumItalic.ttf": "383f656011d41a20bfe4432f6ebf694c",
"assets/assets/fonts/sf-pro-display/sf-pro-display-LightItalic.ttf": "f73efa79c759d4def3650f78f29635d1",
"assets/assets/fonts/sf-pro-display/sf-pro-display-UltralightItalic.ttf": "48e79022841c5aa7bfd2f2cd8272ae3a",
"assets/assets/fonts/sf-pro-display/sf-pro-display-Ultralight.ttf": "1610ab29232e22048184828a9546bb22",
"assets/assets/fonts/titillium/TitilliumWeb-Black.ttf": "8d8d73518f2f1d36654af1b92fbfba99",
"assets/assets/fonts/titillium/TitilliumWeb-Bold.ttf": "d49a8ee8f1baee082909ab2e7c4062d1",
"assets/assets/fonts/titillium/TitilliumWeb-Regular.ttf": "57e937e4eef39e324bd4f26745053687",
"assets/assets/fonts/titillium/TitilliumWeb-SemiBold.ttf": "c21564022e51245ca150237eeb23a2bb",
"assets/assets/fonts/titillium/TitilliumWeb-ExtraLight.ttf": "6a9cdf9fdee47c63bc9c6c9ac284b32f",
"assets/assets/fonts/titillium/TitilliumWeb-BoldItalic.ttf": "cffdbe92e1d7e1c0e730b89aabc4ee11",
"assets/assets/fonts/titillium/TitilliumWeb-ExtraLightItalic.ttf": "347c2449963064a73858ca1e0dd3a4da",
"assets/assets/fonts/titillium/TitilliumWeb-SemiBoldItalic.ttf": "20d8982e3d57983b66ae8dfcdcf48501",
"assets/assets/fonts/titillium/TitilliumWeb-Light.ttf": "71d53d9506f88f09a25f326f29de4201"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
