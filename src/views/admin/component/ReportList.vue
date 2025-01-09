<template>
    <div class="container bg-white p-3">
        <div class="row w-75 m-3">
            <span class="col text-secondary">
                <font-awesome-icon icon="fa-solid fa-user" />
                Reported by
            </span>
            <span class="col text-secondary">
                <font-awesome-icon icon="fa-solid fa-at" />
                Report Time
            </span>
            <span class="col text-secondary">
                <font-awesome-icon icon="fa-solid fa-phone" />
                Title
            </span>
        </div>
        <div class="d-flex flex-column gap-1 p-1" style="background-color: #f5f7fa">
            <!-- <div v-if="tutorStore.pendingTutors?.length === 0" class="text-center text-secondary">No report found.</div>
            <div v-for="tutor in tutorStore.pendingTutors" :key="tutor.id" class="bg-white d-flex align-items-center">
                <div class="row w-75 m-3">
                    <span class="col">{{ tutor.user.name }}</span>
                    <span class="col">{{ tutor.user.email }}</span>
                    <span class="col">{{ tutor.user.phone }}</span>
                </div>
                <div class="btn btn-orange ms-auto me-3" @click="goToDetails(tutor.id)">
                    Details
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>

</script>
