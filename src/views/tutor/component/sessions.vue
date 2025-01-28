<template>
    <!-- Page background wrapper -->
    <div class="min-h-screen bg-gray-100">
        <!-- Top-level container -->
        <div class="mx-auto max-w-7xl py-8 px-4">
            <!-- Page heading -->
            <h1 class="text-2xl font-semibold text-gray-800 mb-6">Sessions</h1>

            <!-- Card container for the form -->
            <div class="bg-white rounded-md shadow p-6">
                <!-- Form heading -->
                <h2 class="text-xl font-semibold text-gray-700 border-b pb-3 mb-6">Session</h2>

                <form @submit.prevent="saveSession" class="space-y-6">
                    <!-- Title & Subtitle (stacked) -->
                    <div class="grid grid-cols-1 gap-4">
                        <!-- Title -->
                        <div>
                            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                            <input v-model="title" id="title" placeholder="You course title" maxlength="80" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500" required />
                        </div>

                        <!-- Subtitle -->
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                            <textarea v-model="description" id="description" placeholder="Course description" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500" required></textarea>
                        </div>
                    </div>

                    <!-- Course Language & Subtitle Language side by side -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Course Language -->
                        <div>
                            <label for="courseLanguage" class="block text-sm font-medium text-gray-700">Course Language</label>
                            <select v-model="courseLanguage" id="courseLanguage" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500" required>
                                <option value="" disabled>Select...</option>
                                <!-- Add more options as needed -->
                                <option value="English">English</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Malay">Malay</option>
                            </select>
                        </div>
                    </div>

                    <!-- Price -->
                    <div class="grid grid-cols-1">
                        <div>
                            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                            <div class="flex items-center space-x-2 mt-1">
                                <span class="text-gray-500">MYR </span>
                                <input v-model="price" id="price" placeholder="Price" class="block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500" required min="0" step="0.01" type="number" />
                                <span class="text-gray-500"> / MONTH</span>
                            </div>
                        </div>
                    </div>

                    <!-- Session Month -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="sessionMonth" class="block text-sm font-medium text-gray-700">Session Month</label>
                            <select v-model="sessionMonth" id="sessionMonth" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500" required>
                                <option value="" disabled>Select month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                    </div>

                    <!-- Working Day & Times -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Working Days -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Working Day</label>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="workingDays.monday" class="form-checkbox text-orange-500" />
                                    <span>Monday</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="workingDays.tuesday" class="form-checkbox text-orange-500" />
                                    <span>Tuesday</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="workingDays.wednesday" class="form-checkbox text-orange-500" />
                                    <span>Wednesday</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="workingDays.thursday" class="form-checkbox text-orange-500" />
                                    <span>Thursday</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="workingDays.friday" class="form-checkbox text-orange-500" />
                                    <span>Friday</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="workingDays.saturday" class="form-checkbox text-orange-500" />
                                    <span>Saturday</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="workingDays.sunday" class="form-checkbox text-orange-500" />
                                    <span>Sunday</span>
                                </label>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label for="sessionTime" class="block text-sm font-medium text-gray-700"> Session Time (2 hours) </label>
                            <div class="flex items-center space-x-2 mt-1">
                                <select v-model="sessionTime" id="sessionTime" class="block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500" required>
                                    <option value="" disabled>Select your 2-hour slot...</option>
                                    <option value="08:00-10:00">08:00 - 10:00</option>
                                    <option value="10:00-12:00">10:00 - 12:00</option>
                                    <option value="13:00-15:00">13:00 - 15:00</option>
                                    <option value="15:00-17:00">15:00 - 17:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Teaching Mode & Location -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <!-- Teaching Mode -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Teaching Mode</label>
                            <div class="flex items-center space-x-4 mt-2">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="teachingMode" value="Online" class="form-radio text-orange-500" required />
                                    <span>Online</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="teachingMode" value="Physical" class="form-radio text-orange-500" required />
                                    <span>Physical</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="teachingMode" value="Online & Physical" class="form-radio text-orange-500" required />
                                    <span>Both</span>
                                </label>
                            </div>
                        </div>

                        <!-- Teaching Location (if physical) -->
                        <div v-if="teachingMode === 'physical' || teachingMode === 'both'">
                            <label for="teachingLocation" class="block text-sm font-medium text-gray-700">Teaching Location</label>
                            <input v-model="teachingLocation" id="teachingLocation" placeholder="Teaching Location" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500" required />
                        </div>
                    </div>

                    <!-- Save button -->
                    <div class="d-flex justify-content-end mt-3">
                        <button type="submit" class="btn btn-orange">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "../../../stores/auth";
import { useTutorStore } from "../../../stores/tutor";

const authStore = useAuthStore();
const tutorStore = useTutorStore();

const title = ref("");
const description = ref("");
const courseLanguage = ref("");
const price = ref("");
const sessionMonth = ref("");
const workingDays = {
    monday: ref(false),
    tuesday: ref(false),
    wednesday: ref(false),
    thursday: ref(false),
    friday: ref(false),
    saturday: ref(false),
    sunday: ref(false),
};
const sessionTime = ref("");
const teachingMode = ref("");
const teachingLocation = ref("");

onMounted(async () => {
    try {
        await tutorStore.fetchSession(authStore.user.id);
        const data = tutorStore.tutorSession;

        if (data) {
            title.value = data.title;
            description.value = data.description;
            courseLanguage.value = data.course_language;
            price.value = data.price;
            sessionMonth.value = data.session_month;
            workingDays.monday = data.session_day.monday;
            workingDays.tuesday = data.session_day.tuesday;
            workingDays.wednesday = data.session_day.wednesday;
            workingDays.thursday = data.session_day.thursday;
            workingDays.friday = data.session_day.friday;
            workingDays.saturday = data.session_day.saturday;
            workingDays.sunday = data.session_day.sunday;
            sessionTime.value = data.session_time;
            teachingMode.value = data.teaching_mode;
            teachingLocation.value = data.teaching_location;
        }
    } catch (error) {
        console.log(error);
    }
});

const saveSession = async () => {
    await tutorStore.addSession(
        {
            title: title.value,
            description: description.value,
            course_language: courseLanguage.value,
            price: price.value,
            session_month: sessionMonth.value,
            session_day: {
                monday: workingDays.monday == true ? true : false,
                tuesday: workingDays.tuesday == true ? true : false,
                wednesday: workingDays.wednesday == true ? true : false,
                thursday: workingDays.thursday == true ? true : false,
                friday: workingDays.friday == true ? true : false,
                saturday: workingDays.saturday == true ? true : false,
                sunday: workingDays.sunday == true ? true : false,
            },
            session_time: sessionTime.value,
            teaching_mode: teachingMode.value,
            teaching_location: teachingLocation.value,
        },
        authStore.user.id
    );
};
</script>
