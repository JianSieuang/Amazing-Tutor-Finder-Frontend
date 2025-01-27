<template>
    <div class="d-flex flex-column min-vh-100">
        <!-- header -->
        <!-- <header_design /> -->

        <div class="position-relative flex-fill">
            <!-- background color -->
            <div class="background position-absolute w-100 z-n1" :style="{ backgroundColor: backgroundColor }" style="height: 225px"></div>
            <!-- content -->
            <div class="m-4 p-4 d-flex flex-column justify-content-center align-items-center ">
                <div class="bg-white rounded-3 w-75 gap-3 d-flex flex-column">
                    <div class="d-flex align-items-center p-4 border-bottom">
                        <img v-if="authStore.user" :src="authStore.image" width="150" height="150" alt="user picture" class="rounded-circle me-3" />
                        <div class="flex-fill">
                                <!-- Username -->
                                <span class="fs-5 fw-bold">{{ authStore.user.name }}</span>

                                <!-- Review and Students Section -->
                                <div class="d-flex justify-content-start align-items-center mt-2 gap-2">
                                    <!-- Reviews Section -->
                                    <div class="d-flex align-items-center gap-2">
                                        <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                        <span class="fw-semibold">
                                            4.8 
                                            <small class="text-muted">(250 reviews)</small>
                                        </span>
                                    </div>
                                    <!-- Students Section -->
                                    <div class="d-flex align-items-center gap-2">
                                        <font-awesome-icon icon="fa-solid fa-user-graduate" class="text-primary" />
                                        <span class="fw-semibold">500 students</span>
                                    </div>
                                </div>
                            </div>
                        <div class="d-flex gap-3">
                            <div class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px;">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon"/>
                            </div>
                            <div class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px;">
                                <font-awesome-icon icon="fa-brands fa-instagram" class="icon"/>
                            </div>
                            <div class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px;">
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon"/>
                            </div>
                        </div>
                    </div>
                    <!-- content -->
                    <div class="d-flex justify-content-center gap-3">
                        <!-- Left -->
                        <div class="left-section d-flex flex-column" style="width: 30%; gap: 1rem;">
                            <!-- aboutme -->
                            <div class="aboutme p-3 rounded" style="border: 1px solid #E9EAF0;">
                            <h5 class="fw-bold">About Me</h5>
                            <p style="color: #6E7485; text-align: justify;">
                                One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup.
                                He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed, and make a lot more money in the process. No more begging for vacation days and living from paycheck to paycheck. After trying everything from e-commerce stores to professional poker his lucky break came when he started freelance design. Vako fell in love with the field that gives him the lifestyle of his dreams.
                                Vako realizes that people who take courses on Udemy want to transform their lives. Today with his courses and mentoring Vako is helping thousands of people transform their lives, just like he did once.
                            </p>
                            </div>
                            <!-- button area-->
                            <div class="btn-area d-flex gap-2">
                            <button 
                                class="btn-orange-secondary w-50 py-2 px-3"
                               >
                                Write a Review
                            </button>
                            <button 
                                class="btn-orange-primary w-50 py-2 px-3"
                                >
                                Book Sessions
                            </button>
                            </div>
                        </div>

                        <!-- right -->
                        <div class="right-section d-flex flex-column" style="width: 70%; gap: 1rem;">
                    <!-- Title -->
                    <h3 class="fw-bold" style="color: #1D2026">Profile Details</h3>

                    <!-- Details Section -->
                    <div class="details p-3 rounded" style="border: 1px solid #E9EAF0;">
                        <div class="d-flex justify-content-around gap-3 ">
                        <!-- Left Details -->
                        <div class="leftdetail">
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">FULL NAME</label>
                            <span style="color: #1D2026; font-size: 1.1rem;">John Doe</span>
                            </div>
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">PHONE NUMBER</label>
                            <span style="color: #1D2026; font-size: 1.1rem;">+123 456 7890</span>
                            </div>
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">EMAIL</label>
                            <span style="color: #1D2026; font-size: 1.1rem;">johndoe@example.com</span>
                            </div>
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">EDUCATION BACKGROUND</label>
                            <span style="color: #1D2026; font-size: 1.1rem;">Master's in Computer Science</span>
                            </div>
                        </div>

                        <!-- Right Details -->
                        <div class="rightdetail">
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">TEACHING EXPERIENCE</label>
                            <ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc; color: #1D2026; font-size: 1.1rem;">
                                <li>5 years as a high school math tutor</li>
                                <li>3 years teaching advanced programming</li>
                            </ul>
                            </div>
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">LOCATION</label>
                            <ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc; color: #1D2026; font-size: 1.1rem;">
                                <li>New York City</li>
                                <li>Available for travel within 50 miles</li>
                            </ul>
                            </div>
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">AVAILABILITY</label>
                            <ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc; color: #1D2026; font-size: 1.1rem;">
                                <li>Monday to Friday: 9 AM - 5 PM</li>
                                <li>Saturday: 10 AM - 2 PM</li>
                            </ul>
                            </div>
                            <div class="mb-3">
                            <label style="font-size: 1.3rem; color: #6E7485; display: block;">RATES</label>
                            <span style="color: #1D2026; font-size: 1.1rem;">$50/hour</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- Student Feedback Section -->
                    <div class="student-feedback-section mt-4">
                        <!-- Title -->
                        <h3 class="fw-bold mb-4" style="color: #1D2026;">Student Feedback</h3>

                        <!-- Feedback List -->
                        <div class="feedback-item d-flex flex-column gap-3 border-bottom pb-3 mt-3" style="border-color: #E9EAF0;">
                        <!-- Feedback Student Detail -->
                        <div class="feedback_stud_detail d-flex align-items-center gap-3">
                            <img v-if="authStore.user" :src="authStore.image" width="50" height="50" alt="user picture" class="rounded-circle me-3" />
                            <div class="d-flex flex-column gap-2">
                            <span class="fw-bold" style="color: #1D2026;">Jane Doe</span>
                            <div class="d-flex align-items-center gap-2">
                                <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-regular fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-regular fa-star" class="text-warning" />
                            </div>
                            </div>
                        </div>

                        <!-- Feedback Description -->
                        <p style="color: #4E5566; font-size: 1rem; margin: 0;">
                            Vako was an amazing tutor! He helped me not only understand the concepts of programming but also taught me how to apply them in real-world scenarios. I couldn't have asked for a better mentor.
                        </p>
                        </div>
                        <div class="feedback-item d-flex flex-column gap-3 border-bottom pb-3 mt-3" style="border-color: #E9EAF0;">
                        <!-- Feedback Student Detail -->
                        <div class="feedback_stud_detail d-flex align-items-center gap-3">
                            <img v-if="authStore.user" :src="authStore.image" width="50" height="50" alt="user picture" class="rounded-circle me-3" />
                            <div class="d-flex flex-column gap-2">
                            <span class="fw-bold" style="color: #1D2026;">Jane Doe</span>
                            <div class="d-flex align-items-center gap-2">
                                <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-solid fa-star" class="text-warning" />
                                <font-awesome-icon icon="fa-regular fa-star" class="text-warning" />
                            </div>
                            </div>
                        </div>

                        <!-- Feedback Description -->
                        <p style="color: #4E5566; font-size: 1rem; margin: 0;">
                            Vako was an amazing tutor! He helped me not only understand the concepts of programming but also taught me how to apply them in real-world scenarios. I couldn't have asked for a better mentor.
                        </p>
                        </div>

                        <!-- Add more feedback items if needed -->
                    </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>
        <!-- footer -->
        <footer_design />
    </div>
</template>

<script setup>
import header_design from "@/component/header.vue";
import footer_design from "@/component/footer.vue";


import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const backgroundColor = computed(() => (authStore.user.role === "student" ? "#FFEEE8" : "#FFC7B2"));

const router = useRouter();
const signOut = async () => {
    await authStore.logout(router);
};
</script>

<style scoped>
.btn-orange-primary {
    background-color: #ff6636;
    color: #ffeee8;
    border-radius: 2px;
    border:none;
}
.btn-orange-secondary {
    background-color: #ffeee8;
    color: #ff6636;
    border-radius: 2px;
    border:none;
}
.nav-item .btn {
    /* padding: 0.5rem 2rem;         */
    font-size: 1rem;
    color: #1d2026;
    background-color: transparent;
    border: none;
    border-radius: 0;
    height: 100%;
}

.nav-item .btn:hover {
    background-color: #f5f7fa;
}

.nav-item .btn.active {
    background-color: #ffffff;
    border-bottom: 3px solid #ff6636;
}
.sm-btn {
        background-color: #F5F7FA;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s,box-shadow 0.3s, color 0.3s;
}
.sm-btn .icon {
    color: #333333; 
    transition: color 0.3s; 
}
.sm-btn:hover {
    background-color: #FF6636;
    transform: scale(1.1);
    box-shadow: 0 0 10px 2px rgba(255, 102, 54, 0.8);
}
.sm-btn:hover .icon {
    color: #F5F7FA !important; 
}

</style>
