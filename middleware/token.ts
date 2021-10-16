// import { Context } from "@nuxt/types";

// export default async function (context: Context) {
// 	if (!process.server) {
// 		return;
// 	}

// 	if (!context.params.code) {
// 		return;
// 	}
// 	if (!context.params.code) {
// 		return;
// 	}

// 	const params = new URLSearchParams(req.url.split("/")[1]);

// 	try {
// 		const response = await axios.post("https://myanimelist.net/v1/oauth2/token", {
// 			client_id: "29a9c9f7896cdb534873fb32235541d0",
// 			client_secret: secret,
// 			grant_type: "authorization_code",
// 			code: context.params.code,
// 			code_verifier: params.get("verifier"),
// 		});
// 		res.statusCode = 200;
// 		res.end(response.data);
// 	} catch (error) {
// 		console.error(error);

// 		res.statusCode = 400;
// 		res.end();
// 	}

// 	console.log(context);
// }
