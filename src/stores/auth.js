import axios from "@/axios";
import { defineStore } from "pinia";
import emailjs from "@emailjs/browser";

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
                router.push("/");
            } catch (error) {
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
                this.image = `http://127.0.0.1:8000${this.user.image}`;
            }
        },

        async editUser(data) {
            try {
                const response = await axios.put("api/user", data);
                this.user = response.data;
                alert("Edit successful!");
                location.reload();
            } catch (error) {
                this.error = err.response?.data?.message || "Edit failed.";
                alert("Edit failed! Pls try again");
            }
        },

        async changePassword(data) {
            try {
                await axios.post(`api/user/changePassword`, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                alert("Password change successful!");
                location.reload();
            } catch (error) {
                this.error = error.response?.data?.message || "Password change failed.";
                alert(this.error);
            }
        },

        async linkEmail(data) {
            try {
                const response = await axios.post(`api/user/linkEmail`, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                alert("Successfully requested to link email. Please wait for the response.");

                const templateParams = {
                    request_name: response.data.user.name,
                    request_email: response.data.user.email,

                    name: response.data.linked_user.name,
                    link_email: response.data.linked_user.email,
                    link: import.meta.env.VITE_FRONTEND_URL + "/auth/sign_in",
                };

                emailjs
                    .send(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_REQUEST_ID, templateParams, {
                        publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
                    })
                    .then(
                        () => {
                            alert("Email sent successfully.");
                        },
                        (error) => {
                            alert("Unable to send email.");
                        }
                    );

                location.reload();
            } catch (error) {
                this.error = error.response?.data?.message || "Email link failed.";
                alert(this.error);
            }
        },
    },
});
