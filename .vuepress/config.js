const vars = require('./.env.json');

const title = 'Vittorio Minacori | Web and Blockchain Developer';
const image = 'https://vittominacori.github.io/assets/images/vittominacori.jpg';

module.exports = {
  title: title,
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'}],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'image', property: 'og:image', content: image }],
    ['meta', { property: 'og:image', content: image }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:image', content: image }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', {name: 'google-site-verification', content: 'Q3pMcwECEGhU_s_cyixqPpPcA8hyrJKEu-vIDEfLAOY'}],
    ['meta', {name: 'facebook-domain-verification', content: '53g1h8apbdq8dkcc84e2e5lkq1rfym'}],
    ['meta', {name: 'msvalidate.01', content: '2222C2A799471867FB1E317854E92631'}],
    ['script',
      {
        src: 'https://kit.fontawesome.com/8991cca26e.js',
        crossorigin: 'anonymous',
      }
    ],
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1',  // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  plugins: [
    ['google-gtag', {
      ga: vars.gaId
    }],
    ['vuepress-plugin-facebook-pixel', {
      pixelId: vars.fbPixelId
    }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Details',
        items: [
          { text: 'About', link: '/about/#about' },
          { text: 'Experience', link: '/about/#experience' },
          { text: 'Projects', link: '/about/#projects' },
          { text: 'Open Source', link: '/about/#open-source' },
          { text: 'Education', link: '/about/#education' },
          { text: 'Research', link: '/about/#research' },
          { text: 'Skills', link: '/about/#skills' },
          { text: 'Interests', link: '/about/#interests' },
          { text: 'Contacts', link: '/about/#contacts' },
        ],
      },
    ],
    sidebar: 'auto',
    smoothScroll: true
  }
};
