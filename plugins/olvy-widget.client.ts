// import Vue from 'vue'
import { defineNuxtPlugin } from "#app";
// @ts-ignore
import OlvyWidget from "@olvyhq/widget-vue";

export default defineNuxtPlugin((nuxtApp) => {
  // OlvyWidget.install(nuxtApp);
  nuxtApp.vueApp.use(OlvyWidget);
});
