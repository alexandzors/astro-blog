// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: "Alex's Blog",
        plugins: [starlightBlog({
          prefix: 'posts',
            authors: {
              alex: {
				name: 'Alexander Henderson',
				title: 'Sometimes a "Developer"',
				picture: '/profile_alex.jpg', // Images in the `public` directory are supported.
				url: 'https://blog.alexsguardian.net/authors/alexander-henderson',
              },
            },
          })],
        customCss: ['./src/blog-styles.css'],
        expressiveCode: {
            /* https://expressive-code.com/guides/themes/ */
            themes: ['github-dark', 'github-light'],
            // @ts-ignore
            plugins: [pluginLineNumbers()],
        },
        social: {
			blueSky: 'https://bsky.app/profile/alexandzors.bsky.social',
			youtube: 'https://www.youtube.com/@alexandzors',
            github: 'https://github.com/alexandzors',
			email: 'mailto:blog@alexsguardian.net'
        },
		}), partytown({
			// https://docs.astro.build/en/guides/integrations-guide/partytown/

			// Example: Disable debug mode.
			config: { debug: false },
		  })],
});