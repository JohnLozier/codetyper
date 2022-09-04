import { IncorrectCharecter, IncorrectInLine } from "./compare";
import { createEffect, createSignal, on, untrack } from "solid-js";

import type { Accessor } from "solid-js";
import type { Errors } from "../types/Wpm";
import { replaceInfinite } from "./utils";

const [rawLetters, setRawLetters] = createSignal<number>(0);
const [errors, setErrors] = createSignal<number[]>([]);
const [errorWpm, setErrorWpm] = createSignal<number[]>([0]);
const [errorsAboveZero, setErrorsAboveZero] = createSignal<number>(0);

export const getWpm = (time: number) =>
	replaceInfinite(parseFloat(Math.max((rawLetters() / 5 - errorWpm().reduce((prev, current) => prev + current, 0) + errorsAboveZero()) / parseFloat((time / 600).toFixed(3)), 0).toFixed(2)) || 0, 0);

export const getRaw = (time: number) =>
	replaceInfinite(parseFloat((((rawLetters() / 5) / parseFloat((time / 600).toFixed(3)))).toFixed(2)) || 0, 0);

export const getErrors = () =>
	errors().reduce<Errors[]>((prev, current) => [...(prev.slice(-1)[0]?.time == current ? prev.slice(0, -1) : prev), {
		amount: prev.slice(-1)[0]?.time == current ? prev.slice(-1)[0]?.amount + 1 : 1,
		time: current
	}], []);

export const getAccuracy = () =>
	((rawLetters() - errors().length) / rawLetters()) * 100;

export const SetWpm = (time: Accessor<number>, typed: Accessor<string>, preview: Accessor<string>, event: Accessor<KeyboardEvent | undefined>) => {
	createEffect((prev: string) => {
		!(untrack(() => event())?.key == "Enter" && untrack(() => event())?.shiftKey) ?
		setRawLetters(current => { return current + (untrack(() => event())?.key != "Enter" ? typed().split("\n").slice(-1)[0].length - prev.split("\n").slice(-1)[0].length : untrack(() => preview()).split("\n")[0].length == typed().split("\n")[0].length ? 1 : 0) }) :
		null;
		return typed();
	}, "");

	createEffect(on(typed, () => {
		const Dif = IncorrectInLine(preview().split("\n").slice(typed().split("\n").length - 1, -1).join("\n"), typed().split("\n").slice(-1)[0]) - errorWpm().slice(-1)[0];

		setErrorWpm(current => [
			...(event()?.key == "Enter" ? current : current.slice(0, -1)),
			IncorrectInLine(preview().split("\n").slice(typed().split("\n").length - 1, -1).join("\n"), typed().split("\n").slice(-1)[0]) + (event()?.key == "Enter" && typed().split("\n")[0].length != preview().split("\n")[0].length ? 1 : 0)
		]);

		setErrorsAboveZero(current =>
			current - (Dif == -1 && getWpm(time()) == 0 ? 1 : Math.min(rawLetters() / 5 - errorWpm().reduce((prev, current) => prev + current, 0) + errorsAboveZero(), 0)));
		
		(IncorrectCharecter(preview(), typed()) || (event()?.key == "Enter" && typed().split("\n")[0].length != preview().split("\n")[0].length)) && typed().length != 0 ? setErrors(current => [
			...current,
			Math.round(time() / 10)
		]) : null
	}));
};

export const resetWpm = () => {
	setRawLetters(0);
	setErrors([]);
	setErrorWpm([0]);
	setErrorsAboveZero(0);
};