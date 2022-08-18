import { createApp } from "vue";
import Widget from './index.vue';

export default (selector: string) => {
    createApp(Widget).mount(selector);
}