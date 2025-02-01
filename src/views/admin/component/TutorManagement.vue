<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh" v-if="loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div class="container bg-white p-3">
        <div class="row w-75 m-3">
            <span class="col text-secondary d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-user" />
                &nbsp Tutor name
            </span>
            <span class="col text-secondary d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-at" />
                &nbsp Email
            </span>
            <span class="col text-secondary d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-phone" />
                &nbsp Phone Number
            </span>
            <span class="col text-secondary d-flex justify-content-center align-items-center">
                <font-awesome-icon icon="fa-solid fa-star" />
                &nbsp Overall Rating
            </span>
        </div>
        <div class="d-flex flex-column gap-1 p-1" style="background-color: #f5f7fa">
            <div v-if="tutorStore.tutors?.length === 0" class="text-center text-secondary">No tutors found.</div>
            <div v-for="tutor in tutorStore.tutors" :key="tutor.id" class="bg-white d-flex align-items-center">
                <div class="row w-75 m-3">
                    <span class="col d-flex ">{{ tutor.user.name }}</span>
                    <span class="col d-flex ">{{ tutor.user.email }}</span>
                    <span class="col d-flex ">{{ tutor.user.phone }}</span>
                    <span class="col d-flex justify-content-center">{{ tutor.overallRate }} / 5</span>
                </div>
                <div class="btn btn-orange ms-auto me-3" @click="goToDetails(tutor.id)">
                    Details
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTutorStore } from "@/stores/tutor.js";

const router = useRouter();
const tutorStore = useTutorStore();
const loading = ref(true);

onMounted(async () => {
    await tutorStore.fetchTutors();
    loading.value = false;
});

const goToDetails = (tutorId) => {
    router.push({ name: "Tutor_Details", params: { id: tutorId } });
};
</script>
