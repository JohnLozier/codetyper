import { createEffect, createSignal } from "solid-js";

import type { Accessor } from "solid-js";
import { getSetting } from "./changeSetting";

const Time = (props: { time: Accessor<number>, restart: Accessor<boolean> }) => {

	const [ timeStart, setTimeStart ] = createSignal(parseInt(getSetting("time")));

	createEffect(() =>
		props.restart() ? setTimeStart(parseInt(getSetting("time"))) : null
	);

	return <h4 class="text-cyan-500 text-3xl">
		{ timeStart() - Math.round(props.time() / 10) }
	</h4>
};

export default Time;