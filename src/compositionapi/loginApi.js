import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"

export const loginApi = () => {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter()
    const error = ref('')
    const blogs = ref([
        { title: "Why Coffee is Better than Tea", id: 1 },
        { title: "...Then I Took an Arrow in the Knee", id: 2 },
        { title: "Mario vs Luigi, Ultimate Showdown", id: 3 },
    ]);

    const user = computed(() => {
        return store.state.user
    })
    const authUser = computed(() => {
        return store.state.authUser
    })


    const handleSubmit = async () => {
        try {
            await store.dispatch("signup", {
                email: email.value,
                password: password.value,
            });
            router.push('/')
        } catch (err) {
            error.value = err.message
        }
    };
    const handleLogin = async () => {
        try {
            await store.dispatch("login", {
                email: email.value,
                password: password.value,
            });
            router.push('/')
        } catch (err) {
            error.value = err.message
        }
    };

    const handleLogout = () => {
        store.dispatch("logout")
        router.push('/')
    }

    return { handleSubmit, email, password, error, handleLogin, blogs, handleLogout, user, authUser };
}