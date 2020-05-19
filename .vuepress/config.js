module.exports = {
  title: 'Vittorio Minacori | Web and Blockchain Developer',
  description: "I'm a Software Engineer continually seeking and testing new tools and opportunities for innovation. I live in Catania and I'm maniacally passionate about web applications, blockchain technologies and development tools.",
  head: [
    ['meta', {property: 'og:type', content: 'website'}],
    ['meta', {property: 'og:image', content: 'https://vittominacori.github.io/assets/images/vittominacori.jpg'}],
    ['meta', {property: 'twitter:card', content: 'summary_large_image'}],
    ['meta', {property: 'twitter:image', content: 'https://vittominacori.github.io/assets/images/vittominacori.jpg'}],
    ['link', {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css'}],
    ['meta', {name: 'google-site-verification', content: 'Q3pMcwECEGhU_s_cyixqPpPcA8hyrJKEu-vIDEfLAOY'}],
    ['script', { 'data-ad-client': 'ca-pub-8932195652957723', async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }],
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-115756440-2'
    }]
  ],
  themeConfig: {
    sidebar: 'auto',
    smoothScroll: true
  }
};
