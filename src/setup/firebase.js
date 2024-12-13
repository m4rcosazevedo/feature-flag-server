const firebase = require('firebase/app')
const firestore = require('firebase/firestore')

const apiKey = process.env.FIREBASE_API_KEY
const projectId = process.env.FIREBASE_PROJECT_ID
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.FIREBASE_APP_ID

const firebaseConfig = {
    apiKey,
    projectId,
    authDomain: projectId + ".firebaseapp.com",
    storageBucket: projectId + ".firebasestorage.app",
    messagingSenderId,
    appId
}

const app = firebase.initializeApp(firebaseConfig)
const db = firestore.getFirestore(app);

module.exports = {
    app,
    db
}