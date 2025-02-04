import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Guides',
      href: getPermalink('/guides'),
    },
    {
      text: 'Categories',
      href: getPermalink('/categories'),
    },
    {
      text: 'Archives',
      href: getPermalink('/archives'),
    },
    {
      text: 'Tags',
      href: getPermalink('/tags'),
    },      
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/alexsguardian.net' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/alexandzors' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@alexandzors' },
    { ariaLabel: `Alex's Guardian`, icon: 'tabler:building', href: 'https://alexsguardian.net' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/favicons/favicon.svg" alt="Alex's Guardian Logo" loading="lazy"></img>
    © 2025 - <a class="text-blue-600 underline dark:text-muted" href="https://github.com/alexandzors"> Alexander Henderson</a>. Some rights reserved. <span class="flex"> Powered by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/onwidget/astrowind"> Astrowind</a> 🚀 </span>
  `,
};
