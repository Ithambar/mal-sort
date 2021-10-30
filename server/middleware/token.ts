import { IncomingMessage, ServerResponse } from 'http'
import { useNuxtApp } from "nuxt3"

export default async function (req: IncomingMessage, res: ServerResponse) {
	const context = useNuxtApp()
	const url = (context.ssrContext!.url as URL)
	const token = url.searchParams.get("token")
	const code = url.searchParams.get("code")

	if (!token || !code) {
		return;
	}

	const params = new URLSearchParams(url.pathname.split("/")[1]);

	try {
		const response = await useFetch("https://myanimelist.net/v1/oauth2/token", {
			method: "POST",
			body: {
				client_id: context.$config.id,
				client_secret: context.$config.secret,
				grant_type: "authorization_code",
				code: context.params.code,
				code_verifier: params.get("verifier"),
			}
		});
		res.statusCode = 200;
		res.end(response.data);
	} catch (error) {
		console.error(error);
		res.statusCode = 400;
		res.end();
	}
}
