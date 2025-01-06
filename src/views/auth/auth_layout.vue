<template>
  <div class="h-100 d-flex flex-column">
    <!-- header -->
    <header_design />

    <!-- main content -->
    <div id="content" class="d-flex" style="flex: 1">
      <!-- png content -->
      <div
        id="left-content"
        class="flex-grow-1 d-flex justify-content-center align-items-center h-100"
        :class="{ 'align-items-center': isSignUp, 'align-items-end': isSignIn }"
        style="background-color: #ebebff"
      >
        <img
          v-if="isSignUp"
          src="@/assets/png/sign_up.png"
          alt=""
          style="max-width: 80%; height: auto"
        />
        <img
          v-if="isSignIn"
          src="@/assets/png/sign_in.png"
          alt=""
          style="max-width: 80%; height: auto"
        />
      </div>

      <!-- form content -->
      <div
        id="right-content"
        class="flex-grow-1 d-flex justify-content-center bg-white"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import header_design from "@/component/header.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isSignUp = computed(() => route.name == "Sign_up");
const isSignIn = computed(() => route.name == "Sign_in");
</script>

<style>
.btn-orange {
  background-color: #ffeee8;
  color: #ff6636;
}

.btn-orange:hover {
  background-color: #ff6636;
  color: #ffeee8;
}

#left-content {
  width: 40%;
  min-width: 400px;
}
#right-content {
  width: auto;
}

@media only screen and (max-width: 1200px) {
  #content {
    flex-wrap: wrap;
  }
  #left-content {
    width: 100%;
    height: 100vh;
    order: 2;
  }
  #right-content {
    width: 100%;
    height: 100vh;
    order: 1;
  }
}
</style>
