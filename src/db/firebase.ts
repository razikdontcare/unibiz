// Import the functions you need from the SDKs you need
import { initializeApp as initClient } from "firebase/app";
import { getAuth as getClientAuth } from "firebase/auth";
import { clientConfig } from "@/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const clientApp = initClient(clientConfig);

export const auth = getClientAuth(clientApp);
