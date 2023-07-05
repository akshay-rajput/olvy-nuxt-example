// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/olvy-widget.client.ts', mode: 'client' }, // only on client side 
  ],
  vite: {
    server: {
      fs: {
          allow: [
            '../widget-vue/',
            '..',
            './node_modules/@olvyhq',
            '../widget-vue/dist/olvy-widget.mjs',
          ]
      }
    }
  }
})
