import { createEffect, on } from "solid-js";

import type { Accessor } from "solid-js";

const Cursor = (props: { typed: Accessor<string>, preview: Accessor<string>, time: Accessor<number> }) => {

	let cursorRef: HTMLDivElement;

	createEffect(on(props.typed, (current) => {
		cursorRef.style.left = `${ props.preview().split("\n")[ current.includes("\n") ? 1 : 0 ].slice(0, current.split("\n").slice(-1)[0].length).replace(/\t/g, "____").length * 0.825 }rem`;
		cursorRef.style.top = `${ current.split("\n").length * 2 - 2 }rem`; 
	}))

	return <div ref={ cursorRef! } class={`block w-0.75 h-8 bg-cyan-700 absolute top-0 transition-left duration-150 ease-in-out${props.time() == 0 || props.time() == 300 ? " animate-blink" : ""}`}/>;
}
export default Cursor;