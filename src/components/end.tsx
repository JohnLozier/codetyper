import { Accessor, onMount } from "solid-js";
import { getAccuracy, getRaw, getWpm } from "./getSpeed";

import Chart from "./chart";
import { getSetting } from "./changeSetting";

const End = (props: { time: Accessor<number> }) => {

	let wpm: HTMLHeadingElement, raw: HTMLHeadingElement, accuracy: HTMLHeadingElement;

	onMount(() => {
		wpm!.innerText = Math.round(getWpm(parseInt(getSetting("time")) * 10)).toString();
		raw!.innerText = Math.round(getRaw(parseInt(getSetting("time")) * 10)).toString();
		accuracy!.innerText = `${ Math.round(getAccuracy()) }%`;
	});

	return (
		<div class="flex">
			<Chart scales={ true } time={ props.time }/>
			<div class="flex flex-col gap-3 text-5xl font-openSans font-semibold justify-center">
				<h1 data-tooltip="Wpm" ref={ wpm! } class="text-cyan-500"></h1>
				<h1 data-tooltip="Raw" ref={ raw! } class="text-cyan-700"></h1>
				<h1 data-tooltip="Accuracy" ref={ accuracy! } class="text-cyan-900"></h1>
			</div>
		</div>
	);
};

export default End;