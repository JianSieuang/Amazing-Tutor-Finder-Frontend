import axios from "@/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        loading: false,
        error: null,
    }),

    actions: {
        async register(credentials, router) {
            this.loading = true;
            this.error = null;

            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/register", credentials);
                await this.fetchUser();
                router.push("/");
            } catch (err) {
                this.error = err.response?.data?.message || "Registration failed.";
            }
            this.loading = false;
        },

        async login(credentials, router) {
            this.loading = true;
            this.error = null;

            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/login", credentials);
                await this.fetchUser();
                if (this.user.role === "admin") {
                    router.push("/admin");
                } else {
                    router.push("/");
                }
            } catch (err) {
                this.error = err.response?.data?.message || "Login failed.";
            } finally {
                this.loading = false;
            }
        },

        async logout(router) {
            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/logout");
                router.push("/");
            } catch (error) {
                console.error("Logout error:", error);
            } finally {
                this.user = null;
            }
        },

        async fetchUser() {
            try {
                await axios.get("/sanctum/csrf-cookie");
                const response = await axios.get("api/user");
                this.user = response.data;
            } catch (error) {
                this.user = null;
            }
        },

        // Update user profile?? why is this here?
        async updateUserProfile(updatedUser) {
            try {
                const response = await axios.put("api/user", updatedUser);
                this.user = response.data;
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        },
    },
});
