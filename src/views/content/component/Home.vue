<template>
    <div class="d-flex gap-5" style="background-color: #f0f2f5">
        <div class="flex-fill d-flex align-items-center">
            <div class="w-auto ms-auto">
                <p class="fw-bold" style="font-size: 4vw">
                    Learn with expert <br />
                    anytime anywhere
                </p>
                <p style="font-size: 1vw">
                    Our mission is to help peolpe to find the best tutor <br />
                    and learn with expert anytime, anywhere
                </p>
                <div class="btn btn-orange" type="button" v-if="showCreateBtn">Create Account</div>
            </div>
        </div>

        <div style="width: 45%; height: 100%">
            <img src="@/assets/png/home_page.png" alt="" class="img-fluid" style="clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 1% 100%)" />
        </div>
    </div>

    <div class="d-flex justify-content-center mt-5">
        <h3 class="fw-bold">Tutor Recommended</h3>
    </div>

    <div class="d-flex justify-content-center" v-if="!showRecommendedTutors">
        <p class="text-muted mt-4">No recommended tutors</p>
    </div>

    <div class="d-flex justify-content-center">
        <div class="row mt-4 col-md-12">
            <div v-for="(tutor, index) in tutorStore.tutors" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 d-flex flex-column">
                    <img :src="`http://127.0.0.1:8000${tutor.title_image}`" class="rounded-t-lg h-[150px] object-cover" :alt="tutor.title_image" />
                    <div class="card-body d-flex flex-column flex-grow-1">
                        <p class="text-[0.9rem] fw-bold mb-1 d-flex justify-content-between align-items-center">
                            <span>{{ tutor.price }}</span>
                            <small class="text-muted p-1 rounded" style="background-color: #ffe5b4">{{ tutor.perSession }}</small>
                        </p>
                        <h5 class="text-[1.2rem] mb-[0.5rem] fw-bold mb-2">{{ tutor.title }}</h5>

                        <div class="mt-auto">
                            <hr style="border: 1px solid #e0e0e0; margin: 0.5rem 0" />

                            <p class="text-[0.9rem] d-flex justify-content-between align-items-center">
                                <span>
                                    <span style="color: #ffc107">★</span>
                                    <small class="text-muted" style="margin-left: 4px">{{ tutor.rating }}</small>
                                </span>

                                <small class="text-muted">{{ tutor.students }} Enrolled</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-center mt-2 mb-4">
        <button class="btn btn-orange">Browse All Tutor</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import { useTutorStore } from "@/stores/tutor.js";

const authStore = useAuthStore();
const tutorStore = useTutorStore();

onMounted(async () => {
    tutorStore.fetchTutors();
});

const showCreateBtn = ref(false);
const showRecommendedTutors = ref(false);

if (!authStore.user) {
    showCreateBtn.value = true;
}

if (tutorStore.tutors.length != 0) {
    showRecommendedTutors.value = true;
}
</script>

<style scoped>
.card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}
</style>
