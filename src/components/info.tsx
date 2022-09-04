const info = () => {
	return (
		<div class="flex h-screen w-screen items-center justify-center">
			<p class="h-fit text-cyan-lightgrey/70 text-2xl text-center w-1/2">
				Hi! This site was made with ❤️ in <a class="text-blue-400 hover:text-blue-500 transition-colors delay-200" href="https://www.solidjs.com/">SolidJS</a> (small new framework). It is meant to be a simple site to
				practice your typing speed when developing by fetching code from the github api. It was highly inspired by <a class="text-yellow-600 hover:text-yellow-700 transition-colors delay-200" href="https://monkeytype.com">MonkeyType</a>'s visual
				design due to its nice minimalistic style, smooth feel and overall nice experience (I highly recommend the site), however all code is original. I will probably be
				doing some small bug fixes and minor improvements in the future. If you find any bugs or just want to contribute to the project check out the <a class="text-cyan-lightgrey hover:text-cyan-lightgrey/70 transition-colors delay-200" target="_blank" href="https://github.com/J-The-Dev/codeTyper">Github</a>!
			</p>
		</div>
	);
};

export default info;