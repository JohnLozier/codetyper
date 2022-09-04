import type { Accessor } from "solid-js";

export const Compare = (original: Accessor<string>, compared: Accessor<string>) => {
	// @ts-ignore due to bug see https://github.com/microsoft/TypeScript/issues/7014
	const Incorrect: Array<string | HTMLElement> = compared().split("").map((node, index, array) => {
		const correctNode = original()[array.slice(0, index).includes("\n") ? original().split("\n")[0].length + index - array.join("").split("\n")[0].length : index]
		return node != correctNode && node != "\n" ?
			correctNode == " " && node == "\t" ? <span class="bg-cyan-grey text-red-800">_</span>:
			correctNode == " " ? <span class="bg-cyan-grey text-red-800">{ node }</span> :
			correctNode == "\t" ? <><span class="bg-red-500 w-0.75 h-8 opacity-40 -my-0.5 inline-block line"></span>{"\t"}</> :
			<span class="bg-cyan-grey text-red-500">{ correctNode }</span>
		: node;
	});

	// @ts-ignore due to bug see https://github.com/microsoft/TypeScript/issues/7014
	const Indented: Array<string | HTMLElement> = Incorrect.map((node, index) => {
		return /^\t+$/.test(compared().slice(0, index + 1).split("\n").slice(-1)[0]) && typeof node == "string" ?
			<><div class="bg-cyan-lightgrey w-0.75 h-8 opacity-40 -my-0.5 inline-block line"></div>{"\t"}</> :
			node
	});

	// @ts-ignore
	const SkippedLines: Array<string | HTMLElement>[] = Indented.map((node, index) =>
		compared().includes("\n") && (index + 1 == compared().split("\n")[0].length || compared().split("\n")[0].length + index == 0) ?
		compared().split("\n")[0].length < original().split("\n")[0].length ? [compared().split("\n")[0].length == 0 ? "" : node, 
			...original().split("\n")[0].slice(index + (compared().split("\n")[0].length == 0 ? 0 : 1)).split("").map(node =>
				node == " " ? <span class="bg-cyan-grey text-red-800">_</span> :
				node == "\t" ? <><span class="bg-red-500 w-0.75 h-8 opacity-40 -my-0.5 inline-block line"></span>{"\t"}</> :
				<span class="bg-cyan-grey text-red-500">{ node }</span>
			), compared().split("\n")[0].length == 0 ? "\n" : ""
		] : node : node
	);

	return SkippedLines;
};

export const IncorrectInLine = (original: string, compared: string) =>
	compared.split("").reduce((prev, node, index, array) =>
		prev + (original[array.join("").slice(0, index + 1).includes("\n") ? original.split("\n")[0].length + index - array.join("").split("\n")[0].length: index] != node ? 1: 0),
	0);

export const IncorrectCharecter = (original: string, compared: string) =>
	original[compared.slice(0, compared.length).includes("\n") ? original.split("\n")[0].length + compared.length - compared.split("\n")[0].length - 1: compared.length - 1] != compared.slice(-1)