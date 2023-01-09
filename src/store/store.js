import { createStore } from "vuex";

//firebase 
import { auth } from '../firebase/config.js'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
    state: {
        user: null,
        authUser: false
    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload
            console.log("user state changed", state.user)
        },
        setAuthUser: (state, payload) => {
            state.authUser = payload
        }
    },
    actions: {
        async signup({ commit }, { email, password }) {
            console.log("user signed in")
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                commit('setUser', res.user)
            } else {
                throw new Error('could not complete signup')
            }

        },
        async login({ commit }, { email, password }) {
            console.log("user logged in")
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                commit('setUser', res.user)
            } else {
                throw new Error('could not complete login')
            }
        },
        async logout({ commit }) {
            console.log('user logged out')
            await signOut(auth)
            commit('setUser', null)
        }
    }
})

const unSub = onAuthStateChanged(auth, (user) => {
    store.commit('setUser', user)
    store.commit('setAuthUser', true)
    unSub()
})

export default store