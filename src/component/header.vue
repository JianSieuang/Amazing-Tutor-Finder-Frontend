<template>
    <header class="py-3 border-bottom bg-white">
        <div class="px-4 d-flex flex-wrap align-items-center gap-3" style="margin-left: auto; margin-right: auto; max-width: 65%;">
            <RouterLink to="/" class="d-flex align-items-center text-dark text-decoration-none">
                <img src="@/assets/png/logo.png" height="40" />
                <span class="fs-4 fw-bold">Amazing Tutor Finder</span>
            </RouterLink>

            <form v-if="!isSignIn && !isSignUp" class="d-flex me-auto">
                <input class="form-control mx-2" type="search" placeholder="Find a tutor" aria-label="Search" />
            </form>

            <div v-if="isSignUp" class="flex-shrink-0 ms-auto d-flex align-items-center">
                <p class="text-secondary mb-0 me-2">Have account?</p>
                <RouterLink to="/auth/sign_in" class="btn btn-orange" type="button"> Login</RouterLink>
            </div>
            <div v-else-if="isSignIn" class="flex-shrink-0 ms-auto d-flex align-items-center">
                <p class="text-secondary mb-0 me-2">Don't have account?</p>
                <RouterLink to="/auth/sign_up" class="btn btn-orange" type="button"> Create Account</RouterLink>
            </div>

            <RouterLink to="/user" v-else-if="authStore.user"> <img :src="authStore.image" width="40" height="40" alt="user picture" class="rounded-circle" /></RouterLink>

            <div v-else class="d-flex gap-2">
                <RouterLink to="/auth/sign_up" class="btn btn-orange" type="button"> Create Account</RouterLink>
                <RouterLink to="/auth/sign_in" class="btn btn-orange" type="button"> Login</RouterLink>
            </div>
        </div>
    </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const route = useRoute();
const isSignUp = computed(() => route.name == "Sign_up");
const isSignIn = computed(() => route.name == "Sign_in");

const authStore = useAuthStore();
</script>

<style scoped>
.text-secondary{
    font-size: 0.88rem !important;
}

</style>
