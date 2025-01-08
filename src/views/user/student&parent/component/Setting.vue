<template>
    <div class="w-75 m-3">
        <span class="fs-4 fw-bold">Account Setting</span>
        <form @submit.prevent="handleEditProfile">
            <div class="d-flex gap-5 flex-wrap">
                <div class="p-4 border d-flex flex-column">
                    <div class="position-relative ">
                        <img :src="placeholderImageUrl" class="img-fluid w-100" alt="user picture" />
                        <div class="w-100 text-center text-white bg-black position-absolute bottom-0 start-50 translate-middle-x p-2" style="opacity: 0.5">
                            <div class="user-select-none" type="button" @click="updateImage">
                                <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
                                Update Photo
                            </div>
                        </div>
                    </div>
                    <p class="fw-light text-secondary text-center" style="max-width: 200px;">Image size should be under 1MB and image ration needs to be 1:1</p>
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
                        <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp" placeholder="Email address" />
                    </div>
                </div>
            </div>
        </form>
    </div>
    <hr class="w-100" />
    <div class="w-75 m-3">
        <form @submit.prevent="handleChangePassword">
            <div class="row gap-3">
                <div class="col p-4">
                    <span class="fs-4 fw-bold">Change password</span>

                    <div class="mb-3">
                        <label for="current-password" class="form-label">Current Password</label>
                        <input type="password" class="form-control" id="current-password" v-model="currentPassword" placeholder="Current Password" />
                    </div>

                    <div class="mb-3">
                        <label for="new-password" class="form-label">New Password</label>
                        <input type="password" class="form-control" id="new-password" v-model="newPassword" placeholder="New Password" />
                    </div>

                    <div class="mb-3">
                        <label for="confirm-password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" placeholder="Confirm Password" />
                    </div>
                </div>

                <div class="col p-4">
                    <span class="fs-4 fw-bold">Link Parent Email</span>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const name = ref("");

const placeholderImageUrl = computed(() => {
    const letters = authStore.user.name ? getFirstLetter(authStore.user.name) : "";
    return `https://via.placeholder.com/144x144/FFEEE8/FF6636/?text=${letters}&font=roboto`;
});
const getFirstLetter = (fullName) => {
    const words = fullName.split(" ").slice(0, 3);
    return words.map((name) => name.charAt(0).toUpperCase()).join("");
};
const updateImage = () => {
    console.log("update image");
};
</script>
