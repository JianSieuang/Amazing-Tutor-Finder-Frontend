import axios from "@/axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useTutorStore = defineStore("tutor", {
    state: () => ({
        tutors: [],
        pendingTutors: [],
        loading: false,
        error: null,
        tutorDetail: null,
        titleImage: null,
    }),
    actions: {
        async register(data, router) {
            try {
                this.loading = true;
                await axios.get("/sanctum/csrf-cookie");
                const response = await axios.post("api/tutors/register", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                alert("Application submitted successfully!");
                router.push("/");
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                } else if (error.request) {
                    alert("No response received from the server. Please check your network connection.");
                } else {
                    alert("An unexpected error occurred. Please try again");
                }
            } finally {
                this.loading = false;
            }
        },

        async fetchPendingTutors() {
            try {
                const response = await axios.get("api/tutors/pending");
                this.pendingTutors = response.data?.tutors;
            } catch (error) {
                console.error("Error fetching pending tutors: ", error);
            }
        },

        async fetchTutors() {
            try {
                const response = await axios.get("api/tutors");
                this.tutors = response.data?.tutors;
            } catch (error) {
                console.error("Error fetching pending tutors: ", error);
            }
        },

        async updateStatus(id, status) {
            try {
                this.loading = true;
                await axios.get("/sanctum/csrf-cookie");
                await axios.post(`api/tutors/${id}/status`, {
                    status: status,
                });
                alert("Tutor status updated successfully!");
                location.href = "/admin/tutor_registration_list";
            } catch (error) {
                console.error("Error update tutors status: ", error);
            }
        },

        async fetchTutorDetails(id) {
            try {
                const response = await axios.get(`api/tutors/${id}`);
                this.tutorDetail = response.data?.tutorDetail;
                this.titleImage = `http://127.0.0.1:8000${response.data?.title_image}`;
            } catch (error) {
                console.error("Error fetching tutor details: ", error);
            }
        },
        async editTutor(data, id, router) {
            try {
                this.loading = true;

                await axios.get("/sanctum/csrf-cookie");
                
                const response = await axios.post(`api/tutors/${id}/edit`, data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                alert("Tutor updated successfully!");
                // router.go();
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                } else if (error.request) {
                    alert("No response received from the server. Please check your network connection.");
                } else {
                    alert("An unexpected error occurred. Please try again");
                }
            } finally {
                this.loading = false;
            }
        },
    },
});
