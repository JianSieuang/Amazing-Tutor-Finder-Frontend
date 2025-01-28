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
        tutor: null,
        titleImage: null,
        tutorSession: [],
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
                const response = await axios.get("api/tutors/testing");
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
                this.tutor = response.data?.userDetail;

                this.titleImage = `http://127.0.0.1:8000` + response.data?.tutorDetail.title_image;

                return response.data?.tutorDetail;
            } catch (error) {
                console.error("Error fetching tutor details: ", error);
            }
        },
        async editTutor(data, id, router) {
            try {
                this.loading = true;

                await axios.get("/sanctum/csrf-cookie");

                console.log(data.get("title_picture"));

                const response = await axios.post(`api/tutors/${id}/edit`, data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                alert("Tutor updated successfully!");
                router.go();
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

        async addSession(data, id) {
            try {
                this.loading = true;

                await axios.get("/sanctum/csrf-cookie");

                const response = await axios.post(`api/tutors/${id}/add_session`, data);

                alert(response.data.message);

                location.href = `/tutor/sessions`;

            } catch (error) {
                alert(error.response.data.message);
            } finally {
                this.loading = false;
            }
        },

        async fetchSession(id) {
            try {
                const response = await axios.get(`api/tutors/${id}/sessions`);
                this.tutorSession = response.data?.sessions;
            } catch (error) {
                console.error("Error fetching tutor sessions: ", error);
            }
        },
    },
});
