export default {
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap",
      },
      { 
        rel:"stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.19/dist/shoelace/shoelace.css"
      }
    ],
    script: [
      { 
        type: "module", 
        src: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.19/dist/shoelace/shoelace.esm.js"
      }
    ]
  },
  css: [
    '~/assets/css/main.scss'
  ],
  generate: {
    fallback: true
  }
}