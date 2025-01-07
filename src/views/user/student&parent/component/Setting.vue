<template>
    <div class="w-75 m-3">
        <span class="fs-4">Account Setting</span>
        <form @submit.prevent="handleSubmit">
            <div class="d-flex gap-5">
                <div class="p-3 border w-25">
                    <div class="position-relative">
                        <img :src="placeholderImageUrl" class="w-100" alt="user picture" />
                        <div class="text-center position-absolute bottom-0 start-50 translate-middle-x bg-secondary text-white w-100">
                            <div class="" @click="updateImage">Update Image</div>
                        </div>
                    </div>
                </div>
                <div class="flex-fill">
                    <div class="row mb-3 align-items-end">
                        <div class="col">
                            <label class="form-label">Full Name </label>
                            <input type="text" class="form-control" id="first-name" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="last-name" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Username</label>
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Username" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp" placeholder="Email address" required />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const placeholderImageUrl = computed(() => {
    const letters = authStore.user.name ? getFirstLetter(authStore.user.name) : "";
    return `https://via.placeholder.com/144x144/FFEEE8/FF6636/?text=${letters}&font=roboto`;
});
const getFirstLetter = (fullName) => {
    const words = fullName.split(" ").slice(0, 3);
    return words.map((name) => name.charAt(0).toUpperCase()).join("");
};
</script>
