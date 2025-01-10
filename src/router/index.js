import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/stores/auth";

// authentication views
import Auth_layout from "../views/auth/AuthLayout.vue";
import Sign_up from "../views/auth/component/SignUp.vue";
import Sign_in from "../views/auth/component/SignIn.vue";
import Tutor_registration from "../views/auth/TutorRegistration.vue";

// admin views
import Admin_layout from "../views/admin/AdminLayout.vue";
import Dashboard from "../views/admin/component/Dashboard.vue";
import Tutor_registration_list from "../views/admin/component/TutorRegistrationList.vue";
import Report_list from "../views/admin/component/ReportList.vue";
import Tutor_management from "../views/admin/component/TutorManagement.vue";
import Settings from "../views/admin/component/Settings.vue";
import TutorDetails from "../views/admin/component/TutorDetails.vue";

// all user view
import Default_layout from "../views/content/DefaultLayout.vue";
import Home from "../views/content/component/Home.vue";
import About from "../views/content/component/About.vue";
import Contact from "../views/content/component/Contact.vue";

// user view
import profile_layout from "../views/user/student&parent/ProfileLayout.vue";
import SettingAndPrivacy from "../views/user/student&parent/component/SettingAndPrivacy.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Default_layout,
            redirect: "/home",
            children: [
                {
                    path: "home",
                    name: "Home",
                    component: Home,
                },
                {
                    path: "about",
                    name: "About",
                    component: About,
                },
                {
                    path: "contact",
                    name: "Contact",
                    component: Contact,
                },
            ],
        },
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
            meta: { requiresGuest: true },
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
                    path: "/tutor_details/:id",
                    name: "Tutor_Details",
                    component: TutorDetails,
                },
                {
                    path: "report_list",
                    name: "Report_List",
                    component: Report_list,
                },
                {
                    path: "tutor_management",
                    name: "Tutor_Management",
                    component: Tutor_management,
                },
                {
                    path: "settings",
                    name: "Settings",
                    component: Settings,
                },
            ],
            meta: { requiresAuth: true, requiresAdmin: true },
        },
        {
            path: "/user",
            component: profile_layout,
            redirect: "/user/setting",
            children: [
                {
                    path: "setting",
                    name: "Setting_and_Privacy",
                    component: SettingAndPrivacy,
                },
            ],
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

    if (!authStore.tryAuth) {
        await authStore.fetchUser();
    }

    if (to.matched.some((record) => record.meta.requiresGuest)) {
        if (authStore.user == null) {
            next();
        } else {
            next({ name: "Home" });
        }
    } else if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (authStore.user != null) {
            next();
        } else {
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
