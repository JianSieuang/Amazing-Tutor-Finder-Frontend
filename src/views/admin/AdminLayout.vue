<template>
    <div class="h-100 d-flex">
        <div class="d-flex flex-column flex-shrink-0 text-secondary bg-dark" style="width: 280px">
            <RouterLink to="#" class="d-flex p-3 align-items-center text-white text-decoration-none">
                <img src="@/assets/png/logo.png" height="40" />
                <span class="fs-4">Amazing Admin</span>
            </RouterLink>
            <hr class="mt-0" />
            <ul class="nav flex-column mb-auto">
                <li class="nav-item">
                    <RouterLink to="/admin/dashboard" class="nav-link text-secondary" :class="{ active: route.name === 'Dashboard' }"><font-awesome-icon icon="fa-solid fa-chart-column" class="mx-3" />Dashboard</RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin/tutor_registration" class="nav-link text-secondary" :class="{ active: route.name === 'Tutor_registration' }"><font-awesome-icon icon="fa-solid fa-circle-plus" class="mx-3" />Registration</RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin/report" class="nav-link text-secondary" :class="{ active: route.name === 'Report' }"><font-awesome-icon icon="fa-solid fa-layer-group" class="mx-3" />Report</RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin/tutor_management" class="nav-link text-secondary" :class="{ active: route.name === 'Tutor_management' }"><font-awesome-icon icon="fa-solid fa-comment-dots" class="mx-3" />Manage Tutor</RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin/settings" class="nav-link text-secondary" :class="{ active: route.name === 'Settings' }"><font-awesome-icon icon="fa-solid fa-gear" class="mx-3" />Settings</RouterLink>
                </li>
            </ul>
            <div class="nav mb-3">
                <div class="nav-link text-secondary w-100"><font-awesome-icon icon="fa-solid fa-right-from-bracket" class="mx-3" />Sign Out</div>
            </div>
        </div>

        <div class="d-flex flex-column flex-grow-1">
            <header class="d-flex align-items-center" style="height: 72px; padding-left: 160px">
                {{ route.name.replace(/_/g, " ") }}
            </header>
            <hr class="mt-0" />
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>
.nav-link:hover {
    background-color: #ff6636;
    color: white !important;
}
.active {
    background-color: #ff6636;
    color: white !important;
}
</style>
