<template>
    <div class="container bg-white p-5">
        <h4>Tutor Details</h4>
        <div class="row mb-3">
            <div class="col-sm-6 col-md-8">
                <div class="mb-3">
                    <label for="fullname" class="form-label">Full Name </label>
                    <input type="text" class="form-control" id="fullname" v-model="tutor.user.name" readonly />
                </div>
                <label for="phone_number" class="form-label">Phone Number</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="phone_number" v-model="tutor.user.phone" readonly />
                </div>

                <div class="row mb-3 align-items-end">
                    <div class="col">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="tutor.user.email" aria-describedby="emailHelp" readonly />
                    </div>

                    <div class="col">
                        <label for="education_background" class="form-label">Education Background</label>
                        <input type="text" class="form-control" id="education_background" v-model="tutor.education_background" readonly />
                    </div>
                </div>
            </div>
            <!-- this got problem -->
            <!-- <div class="col-sm-6 col-md-4">
                <div class="mb-3">
                    <label for="profile_picture" class="form-label">Profile Picture</label>
                    <br />
                    <img :src="'localhost:8000' + tutor.image" alt="" class="img-fluid mt-2" style="max-width: 163px; height: auto" />
                </div>
            </div> -->
        </div>

        <div class="mb-3">
            <label for="teaching_experience" class="form-label">Teaching Experience</label>
            <textarea class="form-control" id="teaching_experience" v-model="tutor.teaching_experience" rows="1" readonly></textarea>
        </div>
        <div>
            <label for="about_me" class="form-label">About Me</label>
            <textarea class="form-control" id="about_me" v-model="tutor.about_me" rows="4" readonly></textarea>
        </div>
    </div>

    <div class="container bg-white p-5 my-4">
        <h4>Social Profile</h4>
        <div class="row mb-3">
            <div class="col">
                <label for="instagram" class="form-label">Instagram</label>
                <div class="input-group">
                    <span class="input-group-text">
                        <font-awesome-icon icon="fa-brands fa-instagram" style="color: #ff6636" />
                    </span>
                    <input type="text" class="form-control" id="instagram" v-model="tutor.instagram" readonly />
                </div>
            </div>
            <div class="col">
                <label for="linkedln" class="form-label">LinkedIn</label>
                <div class="input-group">
                    <span class="input-group-text">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" style="color: #ff6636" />
                    </span>
                    <input type="text" class="form-control" id="linkedln" v-model="tutor.linkedln" readonly />
                </div>
            </div>
            <div class="col">
                <label for="whatsapp" class="form-label">WhatsApp</label>
                <div class="input-group">
                    <span class="input-group-text">
                        <font-awesome-icon icon="fa-brands fa-whatsapp" style="color: #ff6636" />
                    </span>
                    <input type="text" class="form-control" id="whatsapp" v-model="tutor.whatsapp" readonly />
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex flex-row-reverse gap-3">
        <div class="btn btn-orange" @click="tutorStore.updateStatus(tutor.id, 'Approved')">Approve</div>
        <div class="btn btn-orange" @click="tutorStore.updateStatus(tutor.id, 'Rejected')">Reject</div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useTutorStore } from "@/stores/tutor.js";

const router = useRouter();
const tutorStore = useTutorStore();

const tutor = computed(() => {
    const tutorId = router.currentRoute.value.params.id;
    return tutorStore.pendingTutors.find((tutor) => tutor.id === parseInt(tutorId));
});
</script>
