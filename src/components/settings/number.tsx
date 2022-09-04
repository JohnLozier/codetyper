import { getSetting, setSetting } from "../changeSetting";

import type { Setter } from "solid-js";

const Number = (props: { setting: string, min: number, max: number, step: number, onChange?: Function, setRestart: Setter<boolean> }) => {
	let input: HTMLInputElement;
	return (
		<>
			{
				<input ref={ input! } class="text-xl hover:scale-105 transition-transform duration-500 text-cyan-lightgrey bg-transparent outline-none text-right placeholder:opacity-70" style={{ width: `${ props.max == Infinity ? 3 : props.max.toString().length }ch` }} type="text" min="5" placeholder={ (parseInt(getSetting(props.setting))).toString() } onInput={ ({ target }) => (target as HTMLInputElement).value = (target as HTMLInputElement).value.replace(/\D/g, "") } onFocusOut={ ({ target }) => {
					const value = Math.min(props.max, Math.max(props.min, parseInt((target as HTMLInputElement).value)) || parseInt(getSetting(props.setting))) - (Math.min(props.max, Math.max(props.min, parseInt((target as HTMLInputElement).value)) || parseInt(getSetting(props.setting))) % props.step);
					setSetting(props.setting, value);
					(target as HTMLInputElement).placeholder = value.toString();
					(target as HTMLInputElement).value = "";
					props.setRestart(true);
				} } onChange={ () => props.onChange } />
			}
		</>
	);
};

export default Number;