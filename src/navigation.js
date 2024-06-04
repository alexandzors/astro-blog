import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getBlogPermalink(),
    },
    {
      text: 'Guides',
      href: getPermalink('/guides'),
    },
    {
      text: 'Categories',
      href: getPermalink('tutorials', 'category'),
    },
    {
      text: 'Tags',
      href: getPermalink('astro', 'tag'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
}

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100064867567241' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/alexandzors' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/favicons/favicon-32x32.png" alt="agnet logo" loading="lazy"></img>
    © 2024 <a class="text-blue-600 underline dark:text-muted" href="https://github.com/alexandzors/"> Alexander Henderson</a> · Some rights reserved. -- <a class="text-blue-600 underline dark:text-muted" href="https://astrowind.vercel.app/"> Made with Astrowind</a> ❤️
  `,
};