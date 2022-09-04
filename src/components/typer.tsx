import type { Accessor, Setter } from "solid-js";
import { createEffect, on } from "solid-js";

import { Compare } from "../components/compare";
import { getSetting } from "./changeSetting";

const Typer = (props: { typed: Accessor<string>, setTyped: Setter<string>, preview: Accessor<string>, setPreview: Setter<string>, ref: HTMLElement, event: Accessor<KeyboardEvent | undefined>, time: Accessor<number> }) => {

	let previous = { 
		action: "",
		backspace: false
	};
	
	createEffect(on(props.event, () =>
		props.event() && parseInt(getSetting("time")) - props.time() / 10 > 0 ? props.setTyped(current => props.preview()[current.slice(0, props.typed().length).includes("\n") ? props.preview().split("\n")[0].length + props.typed().length - current.split("\n")[0].length : current.length] != "\n" || props.event()?.key == "Backspace" || props.event()?.key == "Enter" || (props.event()?.key == "z" && props.event()?.ctrlKey) ? (() => {
			switch (props.event()?.key) {
				case "Enter":
					props.setPreview(prev => current.split("\n").length > 1 ? prev.split("\n").splice(1).join("\n") : prev);
					return current.split("\n").length > 1 ? current.split("\n")[1] + "\n" : current + "\n";
				case "Tab":
					previous.backspace ? previous.action = "" : null; // for ctrl-z
					previous.action += "\t";
					previous.backspace = false;

					return !props.event()?.ctrlKey ? current + "\t" : current;
				case "Backspace":
					previous.backspace ? null : previous.action = ""; // for ctrl-z
					previous.action += props.event()?.ctrlKey ?
						current.match(/([\w]*|\s*|[^\w\s]*)[ \t]?$/g) : 
						current.slice(-1)
					previous.backspace = true;

					return current.slice(-1) != "\n" ? props.event()?.ctrlKey ?
						current.replace(/([\w]*|\s*|[^\w\s]*)[ \t]?$/g, "") : //ctrl backspace support
						current.slice(0, -1) : current;
				case "z":
					previous.backspace && !props.event()?.ctrlKey ? previous.action = "" : null; // for ctrl-z
					!props.event()?.ctrlKey ? previous.action += props.event()?.key : null;
					!props.event()?.ctrlKey ? previous.backspace = false : null;

					const res: string = props.event()?.ctrlKey ? //use const to to execute line before return
						previous.action != "" ?
							previous.backspace ?
								current += [...previous.action.match(/([\w]*|\s*|[^\w\s]*)[ \t]?$/g)![0]].reverse().join("") :
								current.slice(0, -previous.action.match(/([\w]*|\s*|[^\w\s]*)[ \t]?$/g)![0].length) :
							current :
						current + "z";
					props.event()?.ctrlKey ? previous.action = "" : null;
					return res;
				default:
					previous.backspace && props.event()?.key.length == 1 ? previous.action = "" : null; // for ctrl-z
					props.event()?.key.length == 1 ? previous.action += props.event()?.key : null;
					props.event()?.key.length == 1 ? previous.backspace = false : null;

					return props.event()?.key.length == 1 && !props.event()?.ctrlKey ? current + props.event()?.key : current;
			}
		})() : current ): null,
	{ defer: true }));

	return (
		<code ref={ props.ref } class="whitespace-pre text-cyan-lightgrey text-2xl h-23 block overflow-hidden absolute top-0">
			{
				Compare(props.preview, props.typed)
			}
		</code>
	);
};

export default Typer;