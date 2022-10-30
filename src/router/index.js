import Vue from "vue";
import VueRouter from "vue-router";
import Notfound from "../views/Notfound.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Jobs from "../views/Jobs.vue";
import Register from "../views/Register.vue";
import Forget from "../views/Forget.vue";
import Profile from "../views/Profile.vue";
import Apply from "../views/Apply.vue";
import Company from "../views/Company.vue";
import RegisterCompany from "../views/RegisterCompany.vue";
import LoginCompany from "../views/LoginCompany.vue";
import Logout from "../views/Logout.vue";
import Auth from "../views/nimda/Auth.vue";
import ActivationAccount from "../views/ActivationAccount";
import Corporate from "../views/nimda/Corporate.vue";
import Pelamar from "../views/nimda/Pelamar.vue";
import KategoriPekerjaan from "../views/nimda/Kategori.vue";
import Application from "../views/Application.vue";
import SuccessApply from "../views/SuccessApply.vue"
import Interview from "../views/Interview.vue";

Vue.use(VueRouter);

const routes = [
{
    path: '*',
    name: 'notfound',
    component: Notfound
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/forgetPassword",
    name: "Forget",
    component: Forget
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/apply/:jabatan/:perusahaan/:tingkatPekerjaan/:kualifikasi/:lokasi",
    name: "Apply",
    component: Apply
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
    meta: {
      requiresAuthCompany: true
    }
  },
  {
    path: "/company-register",
    name: "RegisterCompany",
    component: RegisterCompany
  },
  {
    path: "/companyLogin",
    name: "LoginCompany",
    component: LoginCompany
  },
  { path: "/logout", name: "Logout", component: Logout },
  {
    path: "/nimda/auth",
    name: "auth",
    component: Auth
  },
  {
    path: "/activationAccount/:activationCode",
    name: "ActivationAccount",
    component: ActivationAccount

  },
  {
    path: "/nimda/corporate",
    name: "corporate",
    component: Corporate,
    beforeEnter: (to, from, next) => {
      // fungsi routing vue auth guard otentikasi
      // if (localStorage.getItem("token") !== null) {
      if (localStorage.getItem("token") == null) {
        // jika token kosong (*tambahan, dan username admin role = 'wilayah')
        next();
      } else {
        alert("akses ditolak");
        next("/nimda/auth");
      }
    }
  },
  {
    path: "/nimda/pelamar",
    name: "pelamar",
    component: Pelamar,
    beforeEnter: (to, from, next) => {
      // fungsi routing vue auth guard otentikasi
      // if (localStorage.getItem("token") !== null) {
      if (localStorage.getItem("token") == null) {
        // jika token kosong (*tambahan, dan username admin role = 'wilayah')
        next();
      } else {
        alert("akses ditolak");
        next("/nimda/auth");
      }
    }
  },
  {
    path: '/nimda/kategori-pekerjaan',
    name: 'kategori',
    component: KategoriPekerjaan,
    beforeEnter: (to, from, next) => {
      // if (localStorage.getItem('token') !== null) {
      if (localStorage.getItem('token') == null) {
        next()
      } else {
        alert('akses ditolak')
        next('/sign-in')
      }
    }
  },
  {
        path:"/application",
        name: "Application",
        component: Application,

  },
  {
        path:"/successApply",
        name: "SuccessApply",
        component: SuccessApply,
  },
  {
      path:"/interview",
      name:"Interview",
      component: Interview,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;