import { createApp } from "vue";
import PhosphorVue from "phosphor-vue";
import App from "./App.vue";
import "./global.css";

createApp(App).use(PhosphorVue).mount("#app");