import { getSetting, setSetting } from "../changeSetting";

import { Format } from "../cache";
import { createSignal } from "solid-js";

const Toggle = (props: { name: string, setting: string, onChange: Function }) => {
	const [ color, setColor ] = createSignal(getSetting(props.setting) == "true");

	return (
		<h1 class={ `text-xl cursor-pointer w-fit transition-opacity duration-500 text-cyan-lightgrey${ color() ? "" : " opacity-60" }` } onClick={ () => {
			setSetting(props.setting, !color());
			Format();
			setColor(current => !current);
			props.onChange();
		}}>
			{ props.name }
		</h1>
	);
};

export default Toggle;