import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

const Config = defineConfig({
	base: "/codetyper/",
	plugins: [
		solidPlugin()
	],
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	}
});

export default Config;