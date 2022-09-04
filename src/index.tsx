import "./global.css";
import "css-tooltip/dist/css-tooltip.css";

import Chart, { resetChart } from "./components/chart";
import Toast, { RemoveToast, SetToast } from "./components/toast";
import { createEffect, createSignal } from "solid-js";
import { getSetting, setDefault } from "./components/changeSetting";

import Cursor from "./components/cursor";
import End from "./components/end";
import { GetCache } from "./components/cache";
import Icons from "./components/icons";
import Info from "./components/info";
import Preview from "./components/preview";
import { SetWpm } from "./components/getSpeed";
import Setting from "./components/setting";
import Time from "./components/time";
import Typer from "./components/typer";
import Wpm from "./components/wpm";
import { interval } from "./components/utils";
import { render } from "solid-js/web";

const Index = () => {
	let TyperRef: HTMLElement;
	let Timer: ReturnType<typeof setInterval> | null;

	const [preview, setPreview] = createSignal<string>("");
	const [typed, setTyped] = createSignal<string>("", { equals: false });
	const [time, setTime] = createSignal(0);
	const [start, setStart] = createSignal(false);
	const [event, setEvent] = createSignal<KeyboardEvent>();
	const [screen, setScreen] = createSignal<string>("default");
	const [restart, setRestart] = createSignal(false);
	
	setDefault();
	GetCache(setPreview, preview);
	
	SetWpm(time, typed, preview, event);

	createEffect(() =>
		event() && /^(.|Enter|Tab)$/g.test(event()?.key ?? "") && event()?.target == document.body && !event()?.ctrlKey ? setStart(true) : null
	);

	createEffect(() =>
		Timer = start() ? interval(() => setTime(current => current < parseInt(getSetting("time")) * 10 ? current += 1 : parseInt(getSetting("time")) * 10), "1ts") : null
	);

	createEffect(() =>
		time() - parseInt(getSetting("time")) * 10 ? null : setScreen("end")
	);

	document.documentElement.onkeydown = (event: KeyboardEvent) => {
		event.getModifierState("CapsLock") ?
			SetToast("Caps Lock is on", "capslock") :
			RemoveToast("capslock");

		event.key.match(/^(Tab|\/|')$/gm) ? event.preventDefault() : null;
		if (event.target == document.body) {
			if (event.shiftKey && event.key == "Enter") {
				setEvent(event);
				setRestart(true);
				setScreen("default");
			} else
				event.key.match(/^(.|Enter|Tab|Backspace)$/) && !(event.key == "Backspace" && start() == false) && screen() == "default" ? setEvent(event) : null;
		};
	};

	createEffect(() => {
		if (restart()) {
			Timer ? clearTimeout(Timer) : null;
			GetCache(setPreview, preview);
			setTime(0);
			setStart(false);
			setTyped("");
			setRestart(false);
			resetChart();
		};
	});

	createEffect(() =>
		screen() ? setRestart(true) : GetCache(setPreview, preview)
	);

	return (
		<div class="h-screen bg-cyan-grey">
			<Toast />
			<Setting restart={ setRestart }/>
			<Icons setScreen={ setScreen } restart={ setRestart }/>
			{
				screen() == "default" ? <>
					<div class="absolute top-1 left-0">
						<Chart scales={ false } time={ time } />
					</div>
					<div class="h-screen flex items-center flex-col justify-center">
						<div class="flex gap-4">
							<Time time={ time } restart={ restart }/>
							<Wpm event={ event } time={ time } preview={ preview } typed={ typed } />
						</div>
						<div class="relative h-fit">
							<Preview prev={ preview } typed={ typed } />
							<Typer ref={ TyperRef! } typed={ typed } setTyped={ setTyped } preview={ preview } setPreview={ setPreview } event={ event } time={ time } />
							<Cursor typed={ typed } preview={ preview } time={ time } />
						</div>
					</div>
				</>
				: screen() == "end" ? <div class="h-screen flex items-center flex-col justify-center">
					<End time={ time } />
				</div>
				: <Info />
			}
		</div>
	);
};

render(() => <Index />, document.querySelector("#root")!);