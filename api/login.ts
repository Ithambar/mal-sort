// import { Request, Response } from "express";
// import axios from "axios";

// const secret = process.env.MAL_CLIENT_SECRET;

// export default async function (req: Request, res: Response): Promise<void> {
// 	const params = new URLSearchParams(req.url.split("/")[1]);

// 	try {
// 		const response = await axios.post("https://myanimelist.net/v1/oauth2/token", {
// 			client_id: "29a9c9f7896cdb534873fb32235541d0",
// 			client_secret: secret,
// 			grant_type: "authorization_code",
// 			code: params.get("code"),
// 			code_verifier: params.get("verifier"),
// 		});
// 		res.statusCode = 200;
// 		res.end(response.data);
// 	} catch (error) {
// 		console.error(error);

// 		res.statusCode = 400;
// 		res.end();
// 	}
// }
