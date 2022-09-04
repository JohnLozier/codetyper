import type { Accessor } from "solid-js";

const Preview = (props: { prev: Accessor<string>, typed: Accessor<string> }) => {

	let code: HTMLElement;

	return (
		<code ref={ code! } class={ `whitespace-pre text-cyan-lightgrey/50 text-2xl ${ props.typed().split("\n").length == 1 ? "h-24" : "h-32" } block w-100 overflow-x-visible overflow-y-clip transition-height` }>
			{
				props.prev().split("\n").map(node => // replace spaces with tabs
					<>
						{
							// @ts-ignore to prevent bug see https://github.com/microsoft/TypeScript/issues/36788
							[[...node.matchAll(/(|^)\t/gy)].reduce((prev) =>
								[
									<>
										<div class="bg-cyan-lightgrey w-0.75 h-8 opacity-20 -my-0.5 inline-block line"></div>
										{"\t"}
									</>,
									[...prev.flat().slice(0, -1), prev.flat().at(-1)?.substring(1)]
								], [node])
							]
						}
						{"\n"}
					</>
				)
			}
		</code>
	);
};

export default Preview;