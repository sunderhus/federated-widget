import { createApp } from "vue";
import Widget from './index.vue';
import "../../global.css";

export default (selector: string) => {
    createApp(Widget).mount(selector);
}