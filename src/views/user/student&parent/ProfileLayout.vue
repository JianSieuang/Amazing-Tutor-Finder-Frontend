<template>
    <div class="d-flex flex-column min-vh-100">
        <!-- header -->
        <header_design />

        <div class="position-relative flex-fill">
            <!-- background color -->
            <div class="background position-absolute w-100 z-n1" :style="{ backgroundColor: backgroundColor }" style="height: 225px"></div>
            <!-- content -->
            <div class="m-4 p-4 d-flex flex-column justify-content-center align-items-center">
                <div class="bg-white rounded-3 w-75">
                    <div class="d-flex align-items-center p-4">
                        <img v-if="authStore.user" :src="authStore.image" width="100" height="100" alt="user picture" class="rounded-circle me-3" />

                        <span class="fs-5 fw-bold me-auto">{{ authStore.user.name }}</span>
                        <div class="btn" @click="signOut">Sign Out</div>
                    </div>
                    <!-- navbar link -->
                    <div class="d-flex justify-content-center border-top border-bottom">
                        <ul class="nav my-3 gap-5">
                            <li class="nav-item">
                                <router-link to="#" class="nav-link">Tutors</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/user/setting" class="nav-link">Setting & Privacy</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
        <!-- footer -->
        <footer_design />
    </div>
</template>

<script setup>
import header_design from "@/component/header.vue";
import footer_design from "@/component/footer.vue";

import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const backgroundColor = computed(() => (authStore.user.role === "student" ? "#FFEEE8" : "#FFC7B2"));

const router = useRouter();
const signOut = async () => {
    await authStore.logout(router);
};
</script>
