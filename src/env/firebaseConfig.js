import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDjRnxhGzjtqK31WB_OejBQZZHWQO2V9gQ",
    authDomain: "vuex-login-d58ae.firebaseapp.com",
    projectId: "vuex-login-d58ae",
    storageBucket: "vuex-login-d58ae.appspot.com",
    messagingSenderId: "147256602067",
    appId: "1:147256602067:web:a3b7c6977f729d61e69326"
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }