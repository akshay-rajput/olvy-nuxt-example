import { defineNuxtPlugin } from "#app";
// @ts-ignore
import OlvyWidget from "@olvyhq/widget-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(OlvyWidget);
});
