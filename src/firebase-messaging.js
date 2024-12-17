import { getMessaging, getToken, onMessage } from "firebase/messaging";
import app from "./firebase-config";

const messaging = getMessaging(app);

export const getFirebaseToken = (setTokenFound, setTestToken) => {
  return getToken(messaging, {
    vapidKey:
      "BLj6yFgLDbpI5HTR-A7OJ57gsm3QqkVI9Q_m92OuGKLhi9pWe7otUmc9fz1apyhzOKEGkMR2Y3CKOIx9zMicUuQ",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("Token retrieved: ", currentToken);
        setTestToken(currentToken);
        setTokenFound(true);
      } else {
        console.log("No registration token available.");
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.error("Error retrieving token: ", err);
      setTokenFound(false);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });