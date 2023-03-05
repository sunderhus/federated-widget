import { createApp } from "vue";
import Widget from './index.vue';
import PhosphorVue from "phosphor-vue";
import "../../global.css";

export default (selector: string) => {
    createApp(Widget).use(PhosphorVue).mount(selector);
}