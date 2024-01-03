import { createClient } from '$lib/prismicio';


export async function load() {
	const client = createClient();

	const nav = await client.getSingle('nav');

	return {
		nav
	};
}