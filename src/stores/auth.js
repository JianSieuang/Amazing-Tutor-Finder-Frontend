import axios from "@/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
    }),

    actions: {
        async login(credentials) {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/login", credentials);
            await this.fetchUser();
        },

        async logout() {
            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/logout");
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
