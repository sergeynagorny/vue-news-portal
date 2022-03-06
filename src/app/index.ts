import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { router } from "@/app/providers";
import components from "@/shared/components";
import directives from "@/shared/directives";
import icons from "@/shared/icons";
import App from "./index.vue";

const app = createApp(App);

icons.forEach((icon) => {
  library.add(icon);
});

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.component("font-awesome-icon", FontAwesomeIcon).use(router);

export { app };
