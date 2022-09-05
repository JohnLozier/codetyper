import { Accessor } from "solid-js";
import { File } from "../types/File";

const Credit = (props: { file: Accessor<File> }) => {
	return <a class="absolute left-2 hover:scale-105 transition-transform duration-500 bottom-1 text-xl text-cyan-lightgrey/60" href={ props.file().url } target="_blank">
		{
			props.file().name
		}
	</a>
};

export default Credit