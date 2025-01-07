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
                        <img v-if="authStore.user" :src="placeholderImageUrl" width="100" height="100" alt="user picture" class="rounded-circle me-3" />

                        <span class="fs-5 fw-bold me-auto">{{ authStore.user.name }}</span>
                        <div class="btn" @click="signOut">Sign Out</div>
                    </div>
                    <!-- navbar link -->
                    <div class="d-flex justify-content-center border-top border-bottom">
                        <ul class="nav my-3 gap-5">
                            <li class="nav-item">
                                <router-link to="# " class="nav-link">Course</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="#" class="nav-link">Tutors</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="#" class="nav-link">Message</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="#" class="nav-link">Profile</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
    <!-- footer -->
    <footer_design />
</template>

<script setup>
import header_design from "@/component/header.vue";
import footer_design from "@/component/footer.vue";
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const backgroundColor = computed(() => (authStore.user.role === "student" ? "#FFEEE8" : "#FFC7B2"));

const placeholderImageUrl = computed(() => {
    const letters = authStore.user.name ? getFirstLetter(authStore.user.name) : "";
    return `https://via.placeholder.com/144x144/FFEEE8/FF6636/?text=${letters}&font=roboto`;
});
const getFirstLetter = (fullName) => {
    const words = fullName.split(" ").slice(0, 3);
    return words.map((name) => name.charAt(0).toUpperCase()).join("");
};

const router = useRouter();
const signOut = async () => {
    await authStore.logout();
    router.push("/login");
};
</script>
