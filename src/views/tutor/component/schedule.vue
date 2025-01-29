<template>
    <div class="schedule-card">
        <table>
            <thead>
                <tr>
                    <th><b>Name</b></th>
                    <th><b>Time</b></th>
                    <th><b>Teaching Mode</b></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(schedule, index) in schedules" :key="index">
                    <td>{{ schedule.name }}</td>
                    <td>{{ schedule.time }}</td>
                    <td>{{ schedule.mode }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";

const schedules = ref([
    { name: "LEW KIEN YEW", time: "8 Jan 2024, 5.00pm - 8.00pm", mode: "Online" },
    { name: "Sim Boon Xun", time: "9 Jan 2024, 8.00pm - 10.00pm", mode: "Online" },
    { name: "Chong Jian Sieuang", time: "10 Jan 2024, 2.00pm - 4.00pm", mode: "Online" },
    { name: "LEW KIEN YEW", time: "8 Jan 2024, 5.00pm - 8.00pm", mode: "Online" },
]);
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
