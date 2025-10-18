// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Marriedbygen | Wedding Celebrant',
  tagline: 'Creating Meaningful Wedding Ceremonies',
  favicon: 'img/logo.webp',

  // Set the production url of your site here
  url: 'https://nrob536.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nrob536', // Your GitHub username
  projectName: 'nrob536.github.io', // Your GitHub repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Set to false to disable docs plugin
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nrob536/celebrant-website/tree/main/',
          blogSidebarTitle: 'Testimonials',
          blogTitle: 'Wedding Testimonials',
          blogDescription: 'What couples say about their wedding ceremonies',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your wife's logo
      navbar: {
        title: 'Wedding Celebrant',
        logo: {
          alt: 'Wedding Celebrant Logo',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp', 
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {to: '/services', label: 'Services', position: 'left'},
         // {to: '/gallery', label: 'Gallery', position: 'left'},
         // {to: '/blog', label: 'Testimonials', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {to: '/timeline', label: 'Timeline', position: 'left'},
          //{
          //  href: 'https://calendly.com/your-wife-celebrant', // Replace with actual scheduling link
          //  label: 'Schedule a Call',
          //  position: 'right',
          //  className: 'schedule-button',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'About Me',
                to: '/about',
              },
              {
                label: 'Services',
                to: '/services',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/marriedbygen',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/marriedbygen',
              },
              {
                label: 'Email',
                href: 'mailto:marriedbygen@gmail.com',
              },              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Marriedbygen Wedding Celebrant Services`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        // Add any additional themes you may need
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
  
  plugins: [
    // Add any plugins you may need
  ],
};

module.exports = config;
