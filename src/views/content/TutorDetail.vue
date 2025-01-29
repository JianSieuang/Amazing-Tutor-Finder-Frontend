<template>
    <div class="d-flex flex-column min-vh-100">
        <!-- header -->
        <!-- <header_design /> -->

        <div class="position-relative flex-fill">
            <!-- background color -->
            <div class="background position-absolute w-100 z-n1" :style="{ backgroundColor: backgroundColor }" style="height: 225px"></div>
            <!-- content -->
            <div class="m-4 p-4 d-flex flex-column justify-content-center align-items-center">
                <div class="bg-white rounded-3 w-75 gap-3 d-flex flex-column">
                    <div class="d-flex align-items-center p-4 border-bottom">
                        <img v-if="imagePreview" :src="imagePreview" width="150" height="150" alt="user picture" class="rounded-circle me-3" />
                        <div class="flex-fill">
                            <!-- Username -->
                            <span class="fs-5 fw-bold">{{ fullname }}</span>

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
                            <!-- whatsapp -->
                            <a v-if="whatsapp" :href="whatsapp" target="_blank" rel="noopener noreferrer" class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px">
                                <div class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px">
                                    <font-awesome-icon icon="fa-brands fa-whatsapp" class="icon" />
                                </div>
                            </a>

                            <!-- instagram -->
                            <a v-if="instagram" :href="instagram" target="_blank" rel="noopener noreferrer" class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px">
                                <div class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px">
                                    <font-awesome-icon icon="fa-brands fa-instagram" class="icon" />
                                </div>
                            </a>

                            <!-- linkedin -->
                            <a v-if="linkedln" :href="linkedln" target="_blank" rel="noopener noreferrer" class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px">
                                <div class="text-white d-flex align-items-center justify-content-center sm-btn" style="height: 36px; width: 36px">
                                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- content -->
                    <div class="d-flex justify-content-center gap-3">
                        <!-- Left -->
                        <div class="left-section d-flex flex-column" style="width: 30%; gap: 1rem">
                            <!-- aboutme -->
                            <div class="aboutme p-3 rounded" style="border: 1px solid #e9eaf0">
                                <h5 class="fw-bold">About Me</h5>
                                <p style="color: #6e7485; text-align: justify">{{ about_me }}</p>
                            </div>
                            <!-- button area-->
                            <div class="btn-area d-flex gap-2">
                                <button class="btn-orange-secondary w-50 py-2 px-3">Write a Review</button>
                                <button class="btn-orange-primary w-50 py-2 px-3">Book Sessions</button>
                            </div>
                        </div>

                        <!-- right -->
                        <div class="right-section d-flex flex-column" style="width: 70%; gap: 1rem">
                            <!-- Title -->
                            <h3 class="fw-bold" style="color: #1d2026">Profile Details</h3>

                            <!-- Details Section -->
                            <div class="details p-3 rounded" style="border: 1px solid #e9eaf0">
                                <div class="d-flex justify-content-around gap-3 w-100">
                                    <!-- Left Details -->
                                    <div class="leftdetail w-50">
                                        <div class="mb-3">
                                            <label style="font-size: 1.3rem; color: #6e7485; display: block">FULL NAME</label>
                                            <span style="color: #1d2026; font-size: 1.1rem">{{ fullname }}</span>
                                        </div>
                                        <div class="mb-3">
                                            <label style="font-size: 1.3rem; color: #6e7485; display: block">PHONE NUMBER</label>
                                            <span style="color: #1d2026; font-size: 1.1rem">{{ phone_number }}</span>
                                        </div>
                                        <div class="mb-3">
                                            <label style="font-size: 1.3rem; color: #6e7485; display: block">EMAIL</label>
                                            <span style="color: #1d2026; font-size: 1.1rem">{{ email }}</span>
                                        </div>
                                        <div class="mb-3">
                                            <label style="font-size: 1.3rem; color: #6e7485; display: block">EDUCATION BACKGROUND</label>
                                            <span style="color: #1d2026; font-size: 1.1rem">{{ education_background }}</span>
                                        </div>
                                    </div>

                                    <!-- Right Details -->
                                    <div class="rightdetail w-50">
                                        <div class="mb-3">
                                            <label style="text-align: justify; font-size: 1.3rem; color: #6e7485; display: block">TEACHING EXPERIENCE</label>
                                            {{ teaching_experience }}
                                        </div>
                                        <div class="mb-3">
                                            <label style="font-size: 1.3rem; color: #6e7485; display: block">LOCATION</label>
                                            <ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc; color: #1d2026; font-size: 1.1rem">
                                                <li>{{ location ? location : teaching_mode }}</li>
                                            </ul>
                                        </div>
                                        <div class="mb-3">
                                            <label style="font-size: 1.3rem; color: #6e7485; display: block">AVAILABILITY ( {{ session_month }} )</label>
                                            <ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc; color: #1d2026; font-size: 1.1rem">
                                                <li v-for="item in availabilityList" :key="item">{{ item }}</li>
                                            </ul>
                                        </div>
                                        <div class="mb-3">
                                            <label style="font-size: 1.3rem; color: #6e7485; display: block">Price</label>
                                            <span style="color: #1d2026; font-size: 1.1rem">MYR {{ price }}/month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Student Feedback Section -->
                            <div class="student-feedback-section mt-4">
                                <!-- Title -->
                                <h3 class="fw-bold mb-4" style="color: #1d2026">Student Feedback</h3>

                                <!-- Feedback List -->
                                <div class="feedback-item d-flex flex-column gap-3 border-bottom pb-3 mt-3" style="border-color: #e9eaf0">
                                    <!-- Feedback Student Detail -->
                                    <div class="feedback_stud_detail d-flex align-items-center gap-3">
                                        <img v-if="authStore.user" :src="authStore.image" width="50" height="50" alt="user picture" class="rounded-circle me-3" />
                                        <div class="d-flex flex-column gap-2">
                                            <span class="fw-bold" style="color: #1d2026">Jane Doe</span>
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
                                    <p style="color: #4e5566; font-size: 1rem; margin: 0">Vako was an amazing tutor! He helped me not only understand the concepts of programming but also taught me how to apply them in real-world scenarios. I couldn't have asked for a better mentor.</p>
                                </div>
                                <div class="feedback-item d-flex flex-column gap-3 border-bottom pb-3 mt-3" style="border-color: #e9eaf0">
                                    <!-- Feedback Student Detail -->
                                    <div class="feedback_stud_detail d-flex align-items-center gap-3">
                                        <img v-if="authStore.user" :src="authStore.image" width="50" height="50" alt="user picture" class="rounded-circle me-3" />
                                        <div class="d-flex flex-column gap-2">
                                            <span class="fw-bold" style="color: #1d2026">Jane Doe</span>
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
                                    <p style="color: #4e5566; font-size: 1rem; margin: 0">Vako was an amazing tutor! He helped me not only understand the concepts of programming but also taught me how to apply them in real-world scenarios. I couldn't have asked for a better mentor.</p>
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

import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useTutorStore } from "../../stores/tutor";

const authStore = useAuthStore();
const tutorStore = useTutorStore();
const backgroundColor = computed(() => (authStore.user.role === "student" ? "#FFEEE8" : "#FFC7B2"));

const route = useRoute();
const tutorId = route.params.id;

const fullname = ref("");
const phone_number = ref("");
const email = ref("");
const education_background = ref("");
const teaching_experience = ref("");
const about_me = ref("");
const instagram = ref("");
const linkedln = ref("");
const whatsapp = ref("");

const teaching_mode = ref("");
const location = ref("");
const session_month = ref("");
const availabilityList = ref([]);
const price = ref("");

const reviews = ref([]); // haven implement yet

const imagePreview = ref("");

onMounted(async () => {
    try {
        await tutorStore.fetchTutorDetails(tutorId);
        await tutorStore.fetchSession(tutorId);

        const tutorDetail = tutorStore.tutorDetail;
        const tutorData = tutorStore.tutor;
        const session = tutorStore.tutorSession;

        if (tutorDetail && tutorData) {
            fullname.value = tutorData.name;
            phone_number.value = tutorData.phone;
            email.value = tutorData.email;
            imagePreview.value = tutorStore.titleImage;

            education_background.value = tutorDetail.education_background || "";
            teaching_experience.value = tutorDetail.teaching_experience || "";
            about_me.value = tutorDetail.about_me || "";
            instagram.value = tutorDetail.instagram || "";
            linkedln.value = tutorDetail.linkedln || "";
            whatsapp.value = tutorDetail.whatsapp || "";
        }

        if (session) {
            teaching_mode.value = session.teaching_mode ?? "";
            location.value = session.teaching_location ?? "";
            session_month.value = session.session_month ?? "";
            price.value = session.price ?? "";

            if (session.session_day) {
                const dayMapping = {
                    monday: "Monday",
                    tuesday: "Tuesday",
                    wednesday: "Wednesday",
                    thursday: "Thursday",
                    friday: "Friday",
                    saturday: "Saturday",
                    sunday: "Sunday",
                };

                availabilityList.value = [];

                const dayList = session.session_day.slice(1, -1).split(",");

                for (let i = 0; i < dayList.length; i++) {
                    if (dayList[i].includes("true")) {
                        availabilityList.value.push(dayMapping[Object.keys(dayMapping)[i]] + " " + session.session_time);
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
});
</script>

<style scoped>
.btn-orange-primary {
    background-color: #ff6636;
    color: #ffeee8;
    border-radius: 2px;
    border: none;
}
.btn-orange-secondary {
    background-color: #ffeee8;
    color: #ff6636;
    border-radius: 2px;
    border: none;
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
    background-color: #f5f7fa;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s, color 0.3s;
}
.sm-btn .icon {
    color: #333333;
    transition: color 0.3s;
}
.sm-btn:hover {
    background-color: #ff6636;
    transform: scale(1.1);
    box-shadow: 0 0 10px 2px rgba(255, 102, 54, 0.8);
}
.sm-btn:hover .icon {
    color: #f5f7fa !important;
}
</style>
