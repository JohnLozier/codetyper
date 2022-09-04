import { getSetting, setSetting } from "../changeSetting";

import { SetCache } from "../cache";
import type { Setter } from "solid-js";
import { onMount } from "solid-js";

const Select = (props: { setting: string, items: HTMLElement, width: number, setRestart: Setter<boolean> }) => {

	let Selector: HTMLSelectElement;

	onMount(() => {
		Selector.value = getSetting(props.setting);
	});

	return (
		<select ref={ Selector! } class={ `text-xl text-cyan-lightgrey cursor-pointer bg-transparent overflow-hidden text-ellipsis text-right w-${ props.width }` } onChange={ () => { setSetting(props.setting, Selector.value); SetCache(false, props.setRestart); } }>
			{
				props.items
			}
		</select>
	);
};

export default Select;