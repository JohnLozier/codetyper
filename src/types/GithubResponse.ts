export interface GithubResponse {
	items: {
		path: string,
		url: string,
		name: string,
		repository: {
			full_name: string
		}
	}[]
};    