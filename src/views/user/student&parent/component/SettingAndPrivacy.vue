<template>
    <div class="w-75 m-3">
        <span class="fs-4 fw-bold">Account Setting</span>
        <form @submit.prevent="handleEditProfile">
            <div class="d-flex gap-5 flex-wrap">
                <div class="p-4 border d-flex flex-column">
                    <div class="position-relative">
                        <img :src="authStore.image" class="img-fluid w-100" alt="user picture" />
                        <div class="w-100 text-center text-white bg-black position-absolute bottom-0 start-50 translate-middle-x p-2" style="opacity: 0.5">
                            <div class="user-select-none" type="button" @click="updateImage">
                                <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
                                Update Photo
                            </div>
                        </div>
                    </div>
                    <p class="fw-light text-secondary text-center" style="max-width: 200px">Image size should be under 1MB and image ration needs to be 1:1</p>
                </div>
                <div class="flex-fill">
                    <div class="row mb-3 align-items-end">
                        <div class="col">
                            <label class="form-label"> Full Name </label>
                            <input type="text" class="form-control" id="first-name" placeholder="First name" :readonly="!isEditing" :disabled="!isEditing" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="last-name" placeholder="Last name" :readonly="!isEditing" :disabled="!isEditing" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Username</label>
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Username" :readonly="!isEditing" :disabled="!isEditing" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp" placeholder="Email address" :readonly="!isEditing" :disabled="!isEditing" />
                    </div>
                    <div class="d-flex gap-3">
                        <div v-if="isEditing" class="btn btn-orange">Save change</div>
                        <div type="button" class="btn btn-orange" @click="() => (isEditing = !isEditing)">
                            {{ isEditing ? "Cancel" : "Edit" }}
                        </div>
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
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const name = ref(authStore.user.name || "");
const email = ref(authStore.user.email || "");

const isEditing = ref(false);




const updateImage = () => {
    console.log("update image");
};
</script>
