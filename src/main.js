import { createApp } from "vue";
import App from "./App.vue";
import Shape from "./components/Shape";

const app = createApp(App);
app.component("Shape", Shape);
app.mount("#app");
