import { getSetting, setSetting } from "../changeSetting";

import { SetCache } from "../cache";
import type { Setter } from "solid-js";

const Text = (props: { setting: string, setRestart: Setter<boolean> }) => {

	let input: HTMLDivElement;

	return (
		<div ref={input!} class="text-xl text-cyan-lightgrey bg-transparent outline-none text-right w-auto" spellcheck={ false } contenteditable data-ph={ getSetting(props.setting) } onFocusOut={({ target }) => {
			setSetting(props.setting, (target as HTMLDivElement).innerText || getSetting(props.setting));
			(target as HTMLDivElement).innerText && SetCache(false, props.setRestart);
			(target as HTMLDivElement).dataset.ph = (target as HTMLDivElement).innerText || (target as HTMLDivElement).dataset.ph;
			(target as HTMLDivElement).innerText = "";
		} } />
	);
};

export default Text;