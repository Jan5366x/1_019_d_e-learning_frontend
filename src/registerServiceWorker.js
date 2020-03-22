/* eslint-disable no-console */
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n'
        + 'For more details, visit https://goo.gl/AFskqB',
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated(registration) {
      console.log('New content is available; chache will be deleted.');
      registration.unregister().then(() => {
        caches.keys().then((cacheNames) => {
          cacheNames.map((name, index) => {
            caches.delete(name);
            if (index + 1 === cacheNames.length) {
              window.location.reload(true);
            }
          });
        });
      });
      // store.state.app.newContent = true;
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
