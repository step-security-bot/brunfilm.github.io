import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
	lang: "sv-SE",
	title: "Brunfilm",
	description: "brunfilms hemsida",

	theme: defaultTheme({
		// default theme config
		logo: "/images/BrunfilmLogo.jpg",
		logoDark: "/images/BrunfilmLogo.jpg",
		sidebar: false,
		lastUpdated: false,
		contributors: false,
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
});
