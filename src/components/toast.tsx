import { For, createSignal } from "solid-js";

import { ToastType } from "../types/ToastType";

const [toastText, setToastText] = createSignal<ToastType[]>([]);	

const Toast = () => {
	return (
		<div class="absolute flex w-screen justify-center pointer-events-none gap-5">
			<For each={ toastText() }>
				{ ({ text }) =>
					<h1 class="text-cyan-lightgrey text-lg transition-top duration-300 py-3 px-2 bg-black bg-opacity-10 rounded-2xl">{ text }</h1>
				}
			</For>
		</div>
	);
};

export default Toast;

export const SetToast = (text: string, name: string) =>
	toastText().findIndex(toast => toast.name == name) == -1 ? setToastText(current => [...current, {
		text: text,
		name: name
	}]) : null;

export const RemoveToast = (name: string) =>
	setToastText(current => current.filter((node) =>
		node.name != name
	));

export const ToastExists = (name: string) =>
	toastText().findIndex(toast => toast.name == name) > -1;