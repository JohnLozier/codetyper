import ChartJS, { ScatterDataPoint } from "chart.js/auto";
import { createEffect, createSignal, on, onMount } from "solid-js";
import { getAverage, returnOther } from "./utils";
import { getErrors, getRaw, getWpm, resetWpm } from "./getSpeed";

import type { Accessor } from "solid-js";
import { getSetting } from "./changeSetting";

const [chartData, setChartData] = createSignal<ScatterDataPoint[][]>([[],[{
	x: 0,
	y: 0,
}],[{
	x: 0,
	y: 0,
}]]);

let chart: ChartJS<"scatter">;

const Chart = (props: { scales: boolean, time: Accessor<number> }) => {

	let canvas: HTMLCanvasElement;

	onMount(() => {
		chart = new ChartJS(canvas!.getContext("2d")!, {
			type: "scatter",
			data: {
				labels: Array(getSetting("time")).fill("").map(index => index),
				datasets: [
					{
						label: "Errors",
						data: props.scales ? chartData()[0] : [],
						fill: false,
						borderColor: "#ef4444",
						pointStyle: "crossRot",
						yAxisID: "errors",
						borderWidth: 1.5,
					},
					{
						label: "WPM",
						data: props.scales ? [{
							x: 0,
							y: 0
						}, ...Array(parseInt(getSetting("time"))).fill(undefined).map((node, index) => ({
							x: index + 1,
							y: getAverage(chartData()[1].filter(({ x }) => x > index && x < index + 1).map(({ y }) => y))
						}))] : [],
						borderColor: "#06b6d4",
						pointBackgroundColor: "#06b6d4",
						yAxisID: "wpm",
						tension: 0.4,
						pointBorderWidth: 0,
						borderWidth: 2,
						pointRadius: props.scales ? 3 : 0,
						showLine: true
					},
					{
						label: "Raw",
						data: props.scales ? [{
							x: 0,
							y: 0
						}, ...Array(parseInt(getSetting("time"))).fill(undefined).map((node, index) => ({
							x: index + 1,
							y: getAverage(chartData()[2].filter(({ x }) => x > index && x < index + 1).map(({ y }) => y))
						}))] : [],
						borderColor: "#6e6f6f80",
						pointBackgroundColor: "#6e6f6f80",
						yAxisID: "wpm",
						tension: 0.4,
						pointBorderWidth: 0,
						borderWidth: 2,
						pointRadius: props.scales ? 3 : 0,
						showLine: true
					}]
			},
			options: {
				plugins: {
					legend: {
						display: false
					}
				},
				scales: {
					x: {
						grid: {
							display: false,
							drawBorder: false,
						},
						ticks: {
							stepSize: 1
						},
						beginAtZero: true,
						suggestedMax: parseInt(getSetting("time")),
						display: props.scales,
						title: {
							text: "Time",
							display: props.scales
						}
					},
					wpm: {
						position: "left",
						ticks: {
							stepSize: 20
						},
						grid: {
							display: false,
							drawBorder: false
						},
						display: props.scales,
						beginAtZero: true,
						title: {
							text: "Wpm",
							display: props.scales
						}
					},
					errors: {
						position: "right",
						suggestedMax: 5,
						beginAtZero: true,
						ticks: {
							stepSize: 2
						},
						grid: {
							display: false,
							drawBorder: false,
						},
						display: props.scales,
						title: {
							text: "Errors",
							display: props.scales
						}
					}
				},
				interaction: {
					mode: "nearest",
					axis: "x",
					intersect: !props.scales
				},
				animation: false
			}
		});
	});
	
	!props.scales ? createEffect(on(props.time, () => {
			setChartData(current => [
				getErrors().map(({ amount, time }) => ({ x: time, y: amount })),
				[...(current[1] ?? []), {
					x: props.time() / 10,
					y: getWpm(props.time())
				}],
				[...(current[2] ?? []), {
					x: props.time() / 10,
					y: getRaw(props.time())
				}]
			]);
			if (getSetting("graph") == "true") {
				// @ts-ignore due to error converting
				chart.data.datasets = chart.data.datasets.map((dataset, index) =>
					// @ts-ignore due to error converting
					({ data: chartData()[index], ...returnOther(dataset, "data") })
				);
				
				chart.update();
			}
	})) : null;

	return (
		<div class="w-150">
			<canvas ref={ canvas! } width="20rem" height="10rem"/>
		</div>
	);
};

export default Chart;

export const resetChart = () => {
	setChartData([[],[{
		x: 0,
		y: 0,
	}],[{
		x: 0,
		y: 0,
	}]]);

	resetWpm();
};

export const clearChart = () =>
	chart.clear();
