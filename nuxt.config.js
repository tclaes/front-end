export default {
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap",
      },
    ],
  },
  css: [
    '~/assets/css/main.scss'
  ],
  generate: {
    fallback: true
  }
}