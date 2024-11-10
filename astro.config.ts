// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Alex's Blog",
			plugins: [starlightBlog({
				authors: {
				  alex: {
					name: 'Alex',
					title: 'Wizard',
					picture: '/profile_alex.jpg', // Images in the `public` directory are supported.
					url: 'https://alexsguardian.net/',
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
				github: 'https://github.com/alexandzors'
			},
		}),
	],
});
