<template>
    <div class="container py-4">
        <!-- Search Bar -->
        <!-- <div class="mb-3">
            <input type="text" class="form-control" placeholder="🔍 Search in your tutors..." v-model="searchQuery" />
        </div> -->

        <!-- Card Grid -->
        <div class="row">
            <div class="col-md-3" v-for="tutor in tutors" :key="tutor.id">
                <div class="card text-center shadow-sm mb-4">
                    <img :src="tutor.title_image" alt="profile" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{{ tutor.name }}</h5>
                        <p class="card-text text-muted">{{ tutor.session.title }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-warning"> <i class="bi bi-star-fill"></i> {{ tutor?.overallRate?.toFixed(1) }} </span>

                            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />

                            <span class="text-muted">{{ tutor.enrolledStudent }} students</span>
                        </div>

                        <div class="d-flex flex-column gap-2 mt-3">
                            <router-link :to="`/tutor_details/${tutor.user_id}`">
                                <button class="btn btn-detail btn-sm w-100">Detail</button>
                            </router-link>

                            <button class="btn btn-review btn-outline btn-sm w-100" @click="toggleReviewModal(tutor.user_id)">Review</button>
                        </div>
                    </div>
                </div>
                <ReviewModal style="z-index: 100" v-if="showReviewModal[tutor.user_id]" @close="showReviewModal[tutor.user_id] = false" :rateBy="authStore.user.id" :tutorId="tutor.user_id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ReviewModal from "@/views/user/student&parent/component/popup_review.vue";
import { onMounted, ref, watch } from "vue";
import { useTutorStore } from "../../../../stores/tutor";
import { useAuthStore } from "../../../../stores/auth";
import { RouterLink } from "vue-router";

const authStore = useAuthStore();
const tutorStore = useTutorStore();

const showReviewModal = ref({});
const searchQuery = ref("");
const tutors = ref([]);

const fetchTutors = async () => {
    try {
        await tutorStore.fetchEnrolledTutorDetails(authStore.user.id, searchQuery.value);
        tutors.value = tutorStore.tutors;
    } catch (error) {
        console.error("Error fetching tutors:", error);
    }
};

watch(searchQuery, async () => {
    await fetchTutors();
});

onMounted(fetchTutors);

const toggleReviewModal = (tutorId) => {
    showReviewModal.value[tutorId] = !showReviewModal.value[tutorId];
};
</script>

<script>
export default {
    data() {
        return {
            searchQuery: "",
            currentPage: 1,

            itemsPerPage: 8, // 4 cards per row

            designers: [
                { id: 1, name: "Wade Warren", role: "Digital Product Designer", rating: 5.0, students: 238456, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 2, name: "Bessie Cooper", role: "Senior Designer", rating: 4.9, students: 217344, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 3, name: "Floyd Miles", role: "UI/UX Designer", rating: 4.8, students: 435671, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 4, name: "Ronald Richards", role: "Lead Developer", rating: 4.5, students: 1356236, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 5, name: "Emma Watson", role: "Backend Developer", rating: 4.6, students: 328912, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 6, name: "James Smith", role: "Frontend Engineer", rating: 4.7, students: 285674, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 7, name: "Sophia Johnson", role: "Data Scientist", rating: 4.9, students: 524123, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 8, name: "Liam Brown", role: "Cyber Security Expert", rating: 4.5, students: 192387, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },

                { id: 1, name: "a", role: "Digital Product Designer", rating: 5.0, students: 238456, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 2, name: "b", role: "Senior Designer", rating: 4.9, students: 217344, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 3, name: "c", role: "UI/UX Designer", rating: 4.8, students: 435671, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 4, name: "d", role: "Lead Developer", rating: 4.5, students: 1356236, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 5, name: "e", role: "Backend Developer", rating: 4.6, students: 328912, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 6, name: "f", role: "Frontend Engineer", rating: 4.7, students: 285674, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 7, name: "g", role: "Data Scientist", rating: 4.9, students: 524123, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
                { id: 8, name: "h", role: "Cyber Security Expert", rating: 4.5, students: 192387, image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" },
            ],
        };
    },

    computed: {
        filteredDesigners() {
            return this.designers.filter((designer) => designer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || designer.role.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },

        totalPages() {
            return Math.ceil(this.filteredDesigners.length / this.itemsPerPage);
        },

        paginatedDesigners() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredDesigners.slice(start, start + this.itemsPerPage);
        },
    },

    methods: {
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
    },
};
</script>

<style>
.container {
    margin-top: 20px;
}

.card {
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

/* Fixed Image Size */
.card-img-top {
    width: 312px;
    height: 312px;
    object-fit: cover;
    margin: auto;
}

/* Pagination Styling */
.pagination .page-item {
    cursor: pointer;
}

.pagination .page-item.active .page-link {
    background-color: #ff6600;
    border-color: #ff6600;
    color: white;
}

.pagination .page-link {
    color: #ff6600;
}

.d-flex {
    display: flex;
}

.justify-content-between {
    justify-content: space-between;
}

.align-items-center {
    align-items: center;
}

.btn-review {
    background-color: #ff6600; /* orange */
    color: white;
}

.btn-detail {
    background-color: rgba(255, 102, 0, 0.2); /* light orange */
    color: #ff6600; /* orange */
}
</style>
