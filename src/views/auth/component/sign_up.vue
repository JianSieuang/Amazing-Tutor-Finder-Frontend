<template>
  <div class="main d-flex flex-column justify-content-center">
    <h2 class="text-center">Create your account</h2>
    <form @submit.prevent="handleSubmit">
      <div class="row mb-3">
        <div class="col-auto">
          <label for="role" class="form-label">I am</label>
          <select id="role" v-model="role" class="form-select" aria-label="Default select">
            <option value="student" selected>Student</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <div class="col-auto ms-auto">
          <p class="text-secondary mb-0 me-2">U ARE TUTOR??</p>
          <RouterLink
            to="/tutor_registration"
            class="btn btn-purple"
            type="button"
          >
            Become A Tutor</RouterLink
          >
        </div>
      </div>
      <div class="row mb-3 align-items-end">
        <div class="col">
          <label class="form-label">Full Name </label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Last name"
          />
        </div>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          placeholder="Username"
        />
      </div>
      <div class="mb-3">
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
      <div class="row mb-3">
        <div class="col">
          <label for="password" class="form-label">Password</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Create password"
            required
          />
          <font-awesome-icon
            @click="showPassword = !showPassword"
            class="hide-show-icon position-relative"
            :icon="
              showPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'
            "
            size="lg"
          />
        </div>
        <div class="col">
          <label for="confirmPassword" class="form-label"
            >Confirm Password</label
          >
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm password"
            required
          />
          <font-awesome-icon
            @click="showPassword = !showPassword"
            class="hide-show-icon position-relative"
            :icon="
              showPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'
            "
            size="lg"
          />
        </div>
      </div>
      <div class="row mb-3 align-items-center">
        <div class="col-auto">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="AgreementCheck"
              required
            />
            <label class="form-check-label" for="AgreementCheck"
              >I Agree wit all of your Terms & Conditions</label
            >
          </div>
        </div>

        <div class="col-auto ms-auto">
          <button type="submit" class="btn btn-orange" :disabled="loading">
            Create Account
            <font-awesome-icon v-if="loading" icon="fa-solid fa-spinner" />
            <font-awesome-icon v-else icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
      <div v-if="error" class="text-danger mt-2">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "@/axios";

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const role = ref("student");

// haven't use first name and last name yet
// why, cus i dont know where to store based on the current backend design

const loading = ref(false);
const error = ref(null);
const showPassword = ref(false);

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match.";
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    await axios.get("/sanctum/csrf-cookie");
    const response = await axios.post("/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
      role: role.value,
    });
    if (response.status === 204) {
      router.push("/user");
    }
  } catch (err) {
    error.value = err.response.data.message; 
    console.error("Registration error:", err);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.btn-orange {
  background-color: #ff6636;
  color: #ffeee8;
}

.btn-orange:focus {
  background-color: #ff6636;
  color: #ffeee8;
}

.btn-purple {
  background-color: #564ffd;
  color: #ffeee8;
}

.btn-purple:focus {
  background-color: #564ffd;
  color: #ffeee8;
}

.main {
  min-width: 300px;
}

.hide-show-icon {
  float: right;
  top: -30px;
  right: 10px;
  cursor: pointer;
}

@media only screen and (min-width: 1200px) {
  .main {
    min-width: 600px;
  }
}
</style>
