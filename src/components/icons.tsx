import { FiAlertCircle, FiGithub, FiRefreshCw } from "solid-icons/fi";

import type { Setter } from "solid-js"

const Icons = (props: { setScreen: Setter<string>, restart: Setter<boolean> }) => {
	return (
		<div class="absolute flex gap-2 bottom-2 right-2 cursor-pointer">
			<FiRefreshCw class="hover:scale-110 hover:rotate-180 transition-transform duration-500" size={ 24 } color="#6e6f6f" onClick={ () => {
				props.setScreen("default");
				props.restart(true);
			} }/>
			<FiGithub class="hover:scale-110 transition-transform duration-500" size={ 24 } color="#6e6f6f" onClick={ () =>
				window.open("https://github.com/J-The-Dev/codeTyper", "_blank")
			} />
			<FiAlertCircle class="hover:scale-110 transition-transform duration-500" size={ 24 } color="#6e6f6f" onClick={ () => {
				props.setScreen(screen => screen == "info" ? "default" : "info");
				props.restart(true);
			} } />
		</div>
	)
};

export default Icons;