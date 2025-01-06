import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/stores/auth";

// authentication views
import Auth_layout from "../views/auth/auth_layout.vue";
import Sign_up from "../views/auth/component/sign_up.vue";
import Sign_in from "../views/auth/component/sign_in.vue";
import Tutor_registration from "../views/auth/tutor_registration.vue";

// admin views
import Admin_layout from "../views/admin/admin_layout.vue";
import Dashboard from "../views/admin/component/dashboard.vue";
import Tutor_registration_list from "../views/admin/component/tutor_registration_list.vue";
import Report_list from "../views/admin/component/report_list.vue";
import Tutor_management from "../views/admin/component/tutor_management.vue";
import Settings from "../views/admin/component/settings.vue";

import profile_layout from "../views/user/student&parent/profile_layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      component: Auth_layout,
      redirect: "/auth/sign_in",
      children: [
        {
          path: "sign_in",
          name: "Sign_in",
          component: Sign_in,
        },
        {
          path: "sign_up",
          name: "Sign_up",
          component: Sign_up,
        },
      ],
    },
    {
      path: "/tutor_registration",
      name: "Tutor_registration",
      component: Tutor_registration,
    },
    {
      path: "/admin",
      component: Admin_layout,
      redirect: "/admin/dashboard",
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: "tutor_registration_list",
          name: "Tutor_Registration_List",
          component: Tutor_registration_list,
        },
        {
          path: "report_list",
          name: "Report_List",
          component: Report_list,
        },
        {
          path: "tutor_management",
          name: "Tutor_management",
          component: Tutor_management,
        },
        {
          path: "settings",
          name: "Settings",
          component: Settings,
        },
      ],
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: "/user",
      component: profile_layout,
      meta: { requiresAuth: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    authStore.user == null
  ) {
    try {
      await authStore.fetchUser();
      if (authStore.user != null) {
        next();
      } else {
        next({ name: "Sign_up" });
      }
    } catch (error) {
      next({ name: "Sign_up" });
    }
  // } else if (
  //   to.matched.some((record) => record.meta.requiresAdmin) &&
  //   !authStore.user?.is_admin
  // ) {
  //   next({ name: 'Home' })
  } else {
    next();
  }
});

export default router;
