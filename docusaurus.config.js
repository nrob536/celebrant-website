// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Marriedbygen | Wedding Celebrant',
  tagline: 'Creating Meaningful Wedding Ceremonies',
  favicon: 'img/logo.webp',

  // Set the production url of your site here
  url: 'https://yourusername.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wedding-celebrant/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yourusername', // Your GitHub username
  projectName: 'wedding-celebrant', // Your GitHub repo name

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
            'https://github.com/nrob536/wedding-celebrant/tree/main/',
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
          {to: '/gallery', label: 'Gallery', position: 'left'},
          {to: '/blog', label: 'Testimonials', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {
            href: 'https://calendly.com/your-wife-celebrant', // Replace with actual scheduling link
            label: 'Schedule a Call',
            position: 'right',
            className: 'schedule-button',
          },
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
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Gallery',
                to: '/gallery',
              },
              {
                label: 'Testimonials',
                to: '/blog',
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
                href: 'https://www.instagram.com/your-wife-celebrant',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/your-wife-celebrant',
              },
              {
                label: 'Pinterest',
                href: 'https://www.pinterest.com/your-wife-celebrant',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Your Wife's Wedding Celebrant Services`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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