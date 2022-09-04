import CSS from "prettier/parser-postcss";
import HTML from "prettier/parser-html";
import Javascript from "prettier/parser-babel";
import Typescript from "prettier/parser-typescript";
import { format } from "prettier/standalone";
import { getSetting } from "./changeSetting";

const Parser = (text: string) => {
	try {
		return format(
			text,
			{
				parser: getSetting("language") == "JavaScript" ? "babel"
				: getSetting("language") == "TypeScript" ? "typescript"
				: getSetting("language"),
				plugins: [
					Javascript,
					Typescript,
					HTML,
					CSS
				],
				printWidth: 60,
				tabWidth: parseInt(getSetting("tabWidth")),
				useTabs: getSetting("tabs") == "true",
				semi: getSetting("semi") == "true",
				singleQuote: getSetting("singleQuote") == "true"
			}
		);
	} catch {
		return text;
	};
}

export default Parser;