<template>
    <div class="schedule-card">
        <table>
            <thead>
                <tr>
                    <th><b>Name</b></th>
                    <th><b>Month</b></th>
                    <th><b>Day</b></th>
                    <th><b>Time</b></th>
                    <th><b>Teaching Mode</b></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(schedule, index) in schedules" :key="index">
                    <td>{{ schedule.user.name }}</td>
                    <td>{{ schedule.month }}</td>
                    <td>{{ schedule.day }}</td>
                    <td>{{ schedule.time_slot }}</td>
                    <td>{{ schedule.session.teaching_mode }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTutorStore } from "../../../stores/tutor";
import { useAuthStore } from "../../../stores/auth";

const authStore = useAuthStore();
const tutorStore = useTutorStore();

const schedules = ref([]);

onMounted(async () => {
    schedules.value = await tutorStore.fetchSchedule(authStore.user.id);
});
</script>

<style scoped>
.schedule-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background-color: #f2f2f2;
    padding: 10px;
}

td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}
</style>
