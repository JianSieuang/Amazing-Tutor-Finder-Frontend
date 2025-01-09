import axios from "@/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        loading: false,
        error: null,
        image: null,
        tryAuth: false,
    }),

    actions: {
        async register(data, router) {
            this.loading = true;
            this.error = null;

            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/register", data);
                await this.fetchUser();
                alert("Registration successful!");
                router.push("/");
            } catch (err) {
                this.error = err.response?.data?.message || "Registration failed.";
                alert("Registration failed! Pls try again");
            }
            this.loading = false;
        },

        async login(data, router) {
            this.loading = true;
            this.error = null;

            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/login", data);
                await this.fetchUser();
                alert("Login successful!");
                if (this.user.role === "admin") {
                    router.push("/admin");
                } else {
                    router.push("/");
                }
            } catch (err) {
                this.error = err.response?.data?.message || "Login failed.";
                alert("Login failed! Pls try again");
            } finally {
                this.loading = false;
            }
        },

        async logout(router) {
            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/logout");
                alert("Logout successful!");
                router.push("/");
            } catch (error) {
                alert("Logout failed!");
                console.error("Logout error:", error);
            } finally {
                this.user = null;
            }
        },

        async fetchUser() {
            try {
                this.tryAuth = true;
                await axios.get("/sanctum/csrf-cookie");
                const response = await axios.get("api/user");
                this.user = response.data;
                await this.generateImage();
            } catch (error) {
                this.user = null;
            }
        },

        async generateImage() {
            if (this.user.image == null) {
                const letters = this.user.name
                    .split(" ")
                    .slice(0, 3)
                    .map((name) => name.charAt(0).toUpperCase())
                    .join("");
                this.image = `https://via.placeholder.com/144x144/FFEEE8/FF6636/?text=${letters}&font=roboto`;
            } else {
                this.image =  `http://127.0.0.1:8000${this.user.image}`;
            }
        },

        async editUser(data) {
            try {
                const response = await axios.put("api/user", data);
                this.user = response.data;
                alert("Edit successful!");
            } catch (error) {
                this.error = err.response?.data?.message || "Edit failed.";
                alert("Edit failed! Pls try again");
            }
        },
    },
});
