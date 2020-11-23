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
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1&showPolicyLink=1&privacyPage=%2Fprivacy%2F',  // eslint-disable-line max-len
      },
    ],
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-115756440-2'
    }]
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
