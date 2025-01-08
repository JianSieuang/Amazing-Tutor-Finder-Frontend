<template>
  <header_design />
  <div class="min-vh-100 p-4" style="background-color: #f5f7fa">
    <form @submit.prevent="handleLogin">
      <div class="container bg-white p-5 my-4">
        <h4>Tutor Registration</h4>
        <div class="row mb-3">
          <div class="col-sm-6 col-md-8">
            <div class="mb-3">
              <label for="fullname" class="form-label">Full Name </label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Enter your full name"
                required
              />
            </div>
            <label for="phone_number" class="form-label">Phone Number</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <select
                  class="form-select rounded-0"
                  id="country_code"
                  aria-label="Default select"
                >
                  <option value="+60" selected>+60</option>
                  <option value="+65">+65</option>
                </select>
              </div>
              <input
                type="text"
                class="form-control"
                id="phone_number"
                placeholder="Your phone number"
                required
              />
            </div>

            <div class="row mb-3 align-items-end">
              <div class="col">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  required
                />
              </div>

              <div class="col">
                <label for="education_background" class="form-label"
                  >Education Background</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="education_background"
                  placeholder="Education Background"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="mb-3">
              <label for="profile_picture" class="form-label"
                >Profile Picture</label
              >
              <br />
              <img
                v-if="imagePreview"
                :src="imagePreview"
                alt="Profile Picture Preview"
                class="img-fluid mt-2"
                style="max-width: 163px; height: auto"
              />
              <input
                class="form-control"
                type="file"
                id="profile_picture"
                accept="image/*"
                @change="handleImageUpload"
              />
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="teaching_experience" class="form-label"
            >Teaching Experience</label
          >
          <textarea
            class="form-control"
            id="teaching_experience"
            rows="1"
            placeholder="Your teaching experience"
          ></textarea>
        </div>
        <div>
          <label for="about_me" class="form-label">About Me</label>
          <textarea
            class="form-control"
            id="about_me"
            rows="4"
            placeholder="Introduct yourself"
          ></textarea>
        </div>
      </div>

      <div class="container bg-white p-5 my-4">
        <h4>Social Profile</h4>

        <div class="row mb-3">
          <div class="col">
            <label for="instagram" class="form-label">Instagram</label>
            <div class="input-group">
              <span class="input-group-text">
                <font-awesome-icon
                  icon="fa-brands fa-instagram"
                  style="color: #ff6636"
                />
              </span>
              <input
                type="text"
                class="form-control"
                id="instagram"
                placeholder="Please put your Instagram link"
              />
            </div>
          </div>
          <div class="col">
            <label for="linkedin" class="form-label">LinkedIn</label>
            <div class="input-group">
              <span class="input-group-text">
                <font-awesome-icon
                  icon="fa-brands fa-linkedin-in"
                  style="color: #ff6636"
                />
              </span>
              <input
                type="text"
                class="form-control"
                id="linkedin"
                placeholder="Please put your LinkedIn link"
              />
            </div>
          </div>
          <div class="col">
            <label for="whatsapp" class="form-label">WhatsApp</label>
            <div class="input-group">
              <span class="input-group-text">
                <font-awesome-icon
                  icon="fa-brands fa-whatsapp"
                  style="color: #ff6636"
                />
              </span>
              <input
                type="text"
                class="form-control"
                id="whatsapp"
                placeholder="Please put your WhatsApp number"
              />
            </div>
          </div>
        </div>

        <div class="d-flex flex-row-reverse">
          <button
            type="submit"
            class="ms-auto btn btn-orange"
            :disabled="loading"
          >
            Save & Send to Pending
            <font-awesome-icon v-if="loading" icon="fa-solid fa-spinner" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import header_design from "@/component/header.vue";

const email = ref("");
const loading = ref(false);
const imagePreview = ref("");

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleLogin = async () => {
  loading.value = true;

  try {
    await axios.get("/sanctum/csrf-cookie");

    const formData = new FormData();
    formData.append("fullname", document.getElementById("fullname").value);

    formData.append(
      "phone_number",
      document.getElementById("country_code").value +
        document.getElementById("phone_number").value
    );

    formData.append("email", email.value);

    formData.append(
      "education_background",
      document.getElementById("education_background").value
    );

    formData.append(
      "profile_picture",
      document.getElementById("profile_picture").files[0]
    );

    formData.append(
      "teaching_experience",
      document.getElementById("teaching_experience").value
    );

    formData.append("about_me", document.getElementById("about_me").value);

    formData.append("instagram", document.getElementById("instagram").value);

    formData.append("linkedln", document.getElementById("linkedin").value);

    formData.append("whatsapp", document.getElementById("whatsapp").value);

    const response = await axios.post("api/tutors/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Application submitted successfully!");
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      console.error("Server Error:", error.response);
    } else if (error.request) {
      alert(
        "No response received from the server. Please check your network connection."
      );
      console.error("Network Error:", error.request);
    } else {
      alert("An unexpected error occurred. Please try again.");
      console.error("Request Error:", error.message);
    }
  } finally {
    loading.value = false;
  }
};
</script>
