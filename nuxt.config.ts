// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' }],
      script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.min.js', type: 'text/javascript' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', type: 'text/javascript' },
    ],
    }
}})

