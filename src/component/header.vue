<template>
    <header class="py-3 border-bottom bg-white">
        <div class="px-4 d-flex flex-wrap align-items-center gap-3" style="margin-left: auto; margin-right: auto; max-width: 65%;">
            <RouterLink to="/" class="d-flex align-items-center text-dark text-decoration-none">
                <img src="@/assets/png/logo.png" height="40" />
                <span class="fs-4 fw-bold">Amazing Tutor Finder</span>
            </RouterLink>

            <form v-if="!isSignIn && !isSignUp" class="d-flex me-auto position-relative">
                <input
                    class="form-control mx-2"
                    type="search"
                    placeholder="Find a tutor"
                    aria-label="Search"
                    v-model="searchQuery"
                    @input="handleSearch"
                    @focus="showDropdown = true"
                    @blur="hideDropdown"
                />

                <!-- Search Dropdown Menu -->
                <div v-if="showDropdown && searchResults.length" class="search-dropdown mx-2">
                    <ul>
                        <li v-for="(result, index) in searchResults" :key="index" @mousedown.prevent="selectResult(result)">
                            {{ result.name }}
                        </li>
                    </ul>
                </div>
            </form>

            <div v-if="isSignUp" class="flex-shrink-0 ms-auto d-flex align-items-center">
                <p class="text-secondary mb-0 me-2">Have account?</p>
                <RouterLink to="/auth/sign_in" class="btn btn-orange" type="button"> Login</RouterLink>
            </div>
            <div v-else-if="isSignIn" class="flex-shrink-0 ms-auto d-flex align-items-center">
                <p class="text-secondary mb-0 me-2">Don't have account?</p>
                <RouterLink to="/auth/sign_up" class="btn btn-orange" type="button"> Create Account</RouterLink>
            </div>

            <RouterLink to="/user" v-else-if="authStore.user"> <img :src="authStore.image" width="40" height="40" alt="user picture" class="rounded-circle" /></RouterLink>

            <div v-else class="d-flex gap-2">
                <RouterLink to="/auth/sign_up" class="btn btn-orange" type="button"> Create Account</RouterLink>
                <RouterLink to="/auth/sign_in" class="btn btn-orange" type="button"> Login</RouterLink>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref,computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const route = useRoute();
const isSignUp = computed(() => route.name == "Sign_up");
const isSignIn = computed(() => route.name == "Sign_in");

const authStore = useAuthStore();

// search logic
const searchQuery = ref("");
const showDropdown = ref(false);
const searchResults = ref([]);

// test style for dropdown
const tutors = [
    { name: "John Doe - Mathematics" },
    { name: "Jane Smith - English" },
    { name: "Michael Johnson - Physics" },
    { name: "Emily Davis - Chemistry" },
];

// search logic
const handleSearch = () => {
    if (searchQuery.value.trim() === "") {
        searchResults.value = [];
    } else {
        searchResults.value = tutors.filter((tutor) =>
            tutor.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }
};

// select result
const selectResult = (result) => {
    searchQuery.value = result.name;
    showDropdown.value = false;
};

// hide dropdown
const hideDropdown = () => {
    setTimeout(() => {
        showDropdown.value = false;
    }, 200);
};
</script>

<style scoped>
.text-secondary{
    font-size: 0.88rem !important;
}
/* ✅ Search Dropdown */
.search-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 93%;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

/* ✅ Dropdown  */
.search-dropdown ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

/* ✅ dropdown selection */
.search-dropdown li {
    padding: 10px;
    cursor: pointer;
    transition: background 0.2s ease;
}

/* ✅ Hover & Active */
.search-dropdown li:hover {
    background: #ff6636;
    color: white;
}

</style>
