<template>
  <div class="main d-flex flex-column justify-content-center">
    <div class="p-3">
      <h2 class="text-center">Sign in to your account</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            aria-describedby="emailHelp"
            placeholder="Username or email address"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            id="password"
            placeholder="Password"
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
        <div class="row mb-3 align-items-center">
          <div class="form-check col-auto">
            <input type="checkbox" class="form-check-input" id="rememberMe" />
            <label class="form-check-label" for="rememberMe">Remember Me</label>
          </div>
          <div class="col-auto ms-auto">
            <button type="submit" class="btn btn-orange" :disabled="loading">
              Log in
              <font-awesome-icon v-if="loading" icon="fa-solid fa-spinner" />
              <font-awesome-icon v-else icon="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        <div v-if="error" class="text-danger mt-2">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(null);
const showPassword = ref(false);

const handleLogin = async () => {
  loading.value = true;
  error.value = null;
  try {
    await authStore.login({ email: email.value, password: password.value });
    if (authStore.user.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  } catch (err) {
    error.value = err.response.data.message;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.main {
  min-width: 300px;
}

.btn-orange {
  background-color: #ff6636;
  color: #ffeee8;
}

.btn-orange:focus {
  background-color: #ff6636;
  color: #ffeee8;
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
