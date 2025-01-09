import axios from "@/axios";
import { defineStore } from "pinia";

export const useTutorStore = defineStore("tutor", {
    state: () => ({
        tutors: [],
        pendingTutors: [],
        loading: false,
        error: null,
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
                    alert("An unexpected error occurred. Please try again.");
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
            console.log(id, status)
            try {
                this.loading = true;
                await axios.get("/sanctum/csrf-cookie");
                await axios.post(`api/tutors/${id}/status`, status);
            } catch (error) {
                console.error("Error update tutors status: ", error);
            }
        },
    },
});
