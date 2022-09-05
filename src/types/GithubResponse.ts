export interface GithubResponse {
	items: {
		path: string,
		url: string,
		name: string,
		html_url: string,
		repository: {
			full_name: string
		}
	}[]
};    