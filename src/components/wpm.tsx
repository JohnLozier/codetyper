import type { Accessor } from "solid-js";
import { getWpm } from "./getSpeed";

const Wpm = (props: { event: Accessor<KeyboardEvent | undefined>, time: Accessor<number>, preview: Accessor<string>, typed: Accessor<string> }) =>
	<h3 class="text-cyan-700 text-3xl">
		{
			Math.round(getWpm(props.time()))
		}
	</h3>;
   
export default Wpm;