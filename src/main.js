import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";
import { store } from "./store/Store.js";
import { setupInterceptors } from "./utils/httpInterceptors";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: "Login",
      });
    }
    else {
      next();
    }
  }
  else if (to.matched.some((record) => record.meta.requiresAuthCompany)) {
  if (!store.getters.loggedInCompany) {
      next({
        name: "LoginCompany",
      });
    }
    else {
      next();
    }
  }

  // if user already login redirect to profile page
  else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: "Jobs",
      });
    } else {
      next();
    }
  } 
    else {
    next(); // make sure to always call next()!
  }


});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  created() {
    setupInterceptors(store);
  },
  store: store,
}).$mount('#app')
