import axios from "@/axios";
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
    state: () => ({
        loading: false,
        error: null,
    }),
    actions: {
        async uploadImage(data, id) {
            try {
                this.loading = true;
                await axios.get("/sanctum/csrf-cookie");

                const formData = new FormData();
                formData.append('profile_picture', data);

                await axios.post(`/api/users/${id}/image`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                alert("Image uploaded successfully!");
                location.reload();
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
    },
});
