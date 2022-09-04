const defaultSettings = {
	language: "JavaScript",
	name: "google",
	type: "org",
	graph: true,
	time: 30,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	tabs: true
};

export const setSetting = (setting: string, value?: any | JSON) =>
	localStorage.setItem(setting, value.toString());

export const getSetting = (setting: string) =>
	localStorage.getItem(setting)!;

export const setDefault = () =>
	Object.keys(defaultSettings).forEach(node => getSetting(node) ? null : setSetting(node, defaultSettings[node as keyof typeof defaultSettings]));
