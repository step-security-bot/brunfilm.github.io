import { defineUserConfig } from "vuepress";

export default defineUserConfig({
	lang: "sv-SE",
	title: "Brunfilm",
	description: "brunfilms homepage",

	defaulttheme: {
		logo: "/images/BrunfilmLogo.jpg",
		logoDark: "/images/BrunfilmLogo.jpg",
		navbar: [
			// NavbarItem
			{
				text: "Foo",
				link: "/foo/",
			},
			// NavbarGroup
			{
				text: "Group",
				children: ["/group/foo.md", "/group/bar.md"],
			},
			// string - page file path
			"/bar/README.md",
		],
	},
});
