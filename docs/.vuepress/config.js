import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
	lang: "sv-SE",
	title: "Brunfilm",
	description: "Hemsida",

	theme: defaultTheme({
		// default theme config
		logo: "/images/BrunfilmLogo.jpg",
		sidebar: false,
		lastUpdated: false,
		contributors: false,
		colorMode: "dark",
		colorModeSwitch: false,
		navbar: [
			// NavbarItem
			{
				text: "Hem",
				link: "/",
			},
			{
				text: "Om",
				link: "/Om",
			},
			// NavbarGroup
			// {
			// 	text: "Om",
			// 	children: ["/group/foo.md", "/group/bar.md"],
			// }
		],
	}),

	plugins: [
		searchPlugin({
			isSearchable: (page) => page.path !== "/",
		}),
	],
});
