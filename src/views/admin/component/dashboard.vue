<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh" v-if="loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div class="dashboard-container">
        <div class="dashboard-grid">
            <div class="card card-orange">
                <h2 class="count">{{ account }}</h2>
                <p class="title">Register Account</p>
            </div>

            <div class="card card-purple">
                <h2 class="count">{{ parent }}</h2>
                <p class="title">Register Parent</p>
            </div>

            <div class="card card-yellow">
                <h2 class="count">{{ student }}</h2>
                <p class="title">Register Student</p>
            </div>

            <div class="card card-green">
                <h2 class="count">{{ tutor }}</h2>
                <p class="title">Register Tutor</p>
            </div>
        </div>

        <div class="dashboard-grid bottom-grid">
            <div class="card card-red">
                <h2 class="count">{{ tutor_application }}</h2>
                <p class="title">Tutor Applications</p>
            </div>

            <div class="card card-teal">
                <h2 class="count">{{ report }}</h2>
                <p class="title">Reports</p>
            </div>

            <div class="card card-gray">
                <h2 class="count">MYR {{ earn.toFixed(2) }}</h2>
                <p class="title">Total Earning</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../../../stores/auth";

const account = ref(0);
const student = ref(0);
const parent = ref(0);
const tutor = ref(0);
const tutor_application = ref(0);
const report = ref(0);
const earn = ref(0);

const loading = ref(true);

const authStore = useAuthStore();

onMounted(async () => {
    try {
        const data = await authStore.fetchAdminDashboard();

        account.value = data.account;
        student.value = data.student;
        parent.value = data.parent;
        tutor.value = data.tutor;
        tutor_application.value = data.tutor_application;
        report.value = data.report;
        earn.value = data.earn;
    } catch (error) {
        console.error("Error fetching admin dashboard: ", error);
    }

    loading.value = false;
});
</script>

<style scoped>
/* Container Styles */
.dashboard-container {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Grid Layout */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
}

.bottom-grid {
    margin-top: 18px;
}

/* Adjust grid layout for larger screens */
@media (min-width: 768px) {
    .dashboard-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .bottom-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Card Styles */
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Text Styles */
.count {
    font-size: 24px;
    font-weight: bold;
    color: #444;
}

.title {
    font-size: 16px;
    color: #666;
}

/* Background Colors */
.card-orange {
    background-color: #ffedd5;
}

.card-purple {
    background-color: #e9d5ff;
}

.card-yellow {
    background-color: #fef3c7;
}

.card-green {
    background-color: #d1fae5;
}

.card-red {
    background-color: #fee2e2;
}

.card-teal {
    background-color: #ccfbf1;
}

.card-gray {
    background-color: #f3f4f6;
}
</style>
