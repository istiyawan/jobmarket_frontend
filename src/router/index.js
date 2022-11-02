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
import ActivationAccount from "../views/ActivationAccount";
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
  { 
    path: "/logout", 
    name: "Logout", 
    component: Logout 
  },
  {
    path: "/activationAccount/:activationCode",
    name: "ActivationAccount",
    component: ActivationAccount

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