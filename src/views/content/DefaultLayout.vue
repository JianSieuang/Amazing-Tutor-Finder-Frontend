<template>
  <!-- header -->
  <header_design />
  <div class="flex-fill">
    <router-view></router-view>
  </div>
  <!-- footer -->
  <footer_design />
</template>

<script setup>
import header_design from "@/component/header.vue";
import footer_design from "@/component/footer.vue";
</script>
