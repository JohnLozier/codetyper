import Axios, { AxiosResponse } from "axios";
import { createEffect } from "solid-js";
import Strip from "strip-comments";
import Parser from "./parser";
import { getSetting } from "./changeSetting";
import type { Setter, Accessor } from "solid-js";
import type { GithubResponse } from "../types/GithubResponse";
import { RemoveToast, SetToast, ToastExists } from "./toast";
import { wait } from "./utils";
import { CachedFile, File } from "../types/File";

let Fetching = false;
let cachedFile: CachedFile;

export const SetCache = async(preventMulti: boolean, reset?: Setter<boolean>) => {
	if (!sessionStorage.getItem("files") || !preventMulti) {

		try {
			const { data }: AxiosResponse<GithubResponse> = await Axios.get("https://api.github.com/search/code", {
				params: {
					q: `${ getSetting("type") }:${ getSetting("name") } language:${ getSetting("language") } size:<800`,
					sort: "updated",
					per_page: 100
				},
				timeout: 10000
			});

			sessionStorage.setItem("files", JSON.stringify(data.items.map(({ name, path, url, html_url, repository }) => {
				return {
					name: name,
					path: path,
					url: url,
					html_url: html_url,
					repository: {
						full_name: repository.full_name
					}
				};
			})));
		} catch {
			SetToast("We are having trouble fetching that configuration", "codeSearchError");
			wait(() => RemoveToast("codeSearchError"), "3s");
		};		
	};

	cachedFile = await GetFile(preventMulti);

	cachedFile.content && reset ? reset(true) : null;

	return cachedFile;
};

export const GetCache = async(setPreview: Setter<string>, preview: Accessor<string>, setFile: Setter<File>) => {

	setPreview(cachedFile?.content ?? (await SetCache(true)).content);
	setFile({
		name: cachedFile?.name ?? "",
		url: cachedFile?.url ?? ""
	})

	cachedFile = await GetFile();
	
	createEffect(async() => {
		if (preview().split("\n").length < 5 && !Fetching) {
			const File = cachedFile ?? await SetCache(true);
			setPreview(current => `${ current }\n\n${ File.content }`);
			setFile({
				name: File?.name ?? "",
				url: File?.url ?? ""
			})
			cachedFile = await GetFile(true);
		};
	});
};

const GetFile = async(preventMulti?: boolean) => {

	preventMulti ? Fetching = true : null;

	const file = (<GithubResponse["items"]>JSON.parse(sessionStorage.getItem("files")!))?.[Math.floor(Math.random() * JSON.parse(sessionStorage.getItem("files")!).length)];
	try {
		const { data }: AxiosResponse<string | JSON> = await Axios.get(`https://raw.githubusercontent.com/${ file.repository.full_name }/${ file.url.split("ref=").slice(-1)[0] }/${ file.path }`, {
			responseType: "text",
			timeout: 5000
		}).finally(() => preventMulti ? Fetching = false : null);

		return {
			content: Format(data),
			url: file.html_url,
			name: file.name
		};
	} catch {
		if (!ToastExists("codeSearchError")) {
			SetToast("We are having trouble fetching that file", "textFetchError");
			wait(() => RemoveToast("textFetchError"), "3s");
		};
		
		return {
			content: Format(""),
			url: "",
			name: ""
		}
	};
};

export const Format = (data?: string | JSON | undefined) => {
	const text = data ?? cachedFile;

	const res = Strip(
		Parser(typeof text != "string" ? JSON.stringify(text) : text)
	).trim().split("\n").map(node =>
		getSetting("tabs") == "true" ? node.replace(/(|^) {2}/gy, "\t") : node // convert indentation to tabs
	).join("\n")
		.replace(/.{60,65}/gm, "$&\n") // max line length
		.replace(/\n{3,}/gm, "\n\n") // remove extra whitespace
		.replace(/[^ -~|\n|\t]|^[\t ]+$/gm, ""); // remove Unicode and extra indent's
	
	!data ? cachedFile = {
		content: res,
		url: cachedFile.url,
		name: cachedFile.name
	} : null;

	return res;
};