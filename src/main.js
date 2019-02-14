import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/about", component: About }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

const root = new Vue({
  render: h => h(App),
  router
}).$mount();

document.body.appendChild(root.$el);
