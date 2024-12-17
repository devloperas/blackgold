/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Import the Firebase scripts
importScripts(
    "https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js"
  );
importScripts(
"https://www.gstatic.com/firebasejs/11.1.0/firebase-messaging-compat.js"
);
  
  // Initialize Firebase in the service worker
  const firebaseConfig = {
    apiKey: "AIzaSyCWKaBOTC9JvEPjyPVEYlnByr7N5-p461g",
    authDomain: "reactpwa-b5948.firebaseapp.com",
    projectId: "reactpwa-b5948",
    storageBucket: "reactpwa-b5948.firebasestorage.app",
    messagingSenderId: "545674037058",
    appId: "1:545674037058:web:265101e9b939c783af2adb",
    measurementId: "G-H2DWLGSFGP",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  // Handle background messages
  messaging.onBackgroundMessage((payload) => {
    console.log("Received background message: ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: "/icon-192x192.png",
    };
    new Notification(notificationTitle, notificationOptions);
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });