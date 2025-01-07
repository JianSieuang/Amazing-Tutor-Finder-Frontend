<template>
  <footer
    class="d-flex flex-column text-secondary p-3"
    style="background-color: #1d2026;"
  >
    <div
      class="flex-fill d-flex align-items-center justify-content-center gap-3"
    >
      <div>
        <RouterLink
          to="#"
          class="d-flex align-items-center text-white text-decoration-none"
          style="background: none"
        >
          <img src="@/assets/png/logo.png" height="40" />
          <span class="fs-2">Amazing Tutor Finder</span>
        </RouterLink>
        <div class="d-flex gap-3">
          <div
            class="text-white d-flex align-items-center justify-content-center"
            style="height: 36px; width: 36px; background-color: #363b47"
          >
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </div>
          <div
            class="text-white d-flex align-items-center justify-content-center"
            style="height: 36px; width: 36px; background-color: #363b47"
          >
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
          <div
            class="text-white d-flex align-items-center justify-content-center"
            style="height: 36px; width: 36px; background-color: #363b47"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
      <div>
        <label class="text-uppercase text-white">Quick Links</label>
        <ul class="nav flex-column">
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link text-secondary p-0"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link text-secondary p-0"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <p class="text-center">
      &copy; 2024 - Software Project. Designed by SBX. All rights reserved.
    </p>
  </footer>
</template>
