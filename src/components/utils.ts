import type { TimeString } from "../types/Time";

export const replaceInfinite = (value: number, replace: number) =>
	isFinite(value) ? value : replace;

export const returnOther = (array: Object[], key: string) => {
	// @ts-ignore
	delete array[key];
	return array;
}

export const getAverage = (array: number[]) =>
	array.reduce((prev, current) => prev + current, 0) / array.length;

export const getMs = (time: TimeString) => {
	const [number, type] = time.matchAll(/\d+|\w+/g);

	return parseInt(number[0]) * (
		type[0] == "hs" ? 10 :
		type[0] == "ts" ? 100 :
		type[0] == "s" ? 1000 :
		type[0] == "m" ? 60000 :
		type[0] == "h" ? 3600000 :
		type[0] == "d" ? 86400000 : 1
	);
};

export const wait = (func: Function, time: TimeString) =>
	setTimeout(() => func(),
		getMs(time)
	);

export const interval = (func: Function, time: TimeString) =>
	setInterval(() => func(),
		getMs(time)
	);