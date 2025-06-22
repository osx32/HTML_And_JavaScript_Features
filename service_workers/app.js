if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Saved Successfully.'))
    .catch(error => console.error('Registration Failed.',error));
}