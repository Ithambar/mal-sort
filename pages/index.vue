<template>
	<label>
		<input class="hidden" type="file" accept=".xml" @change="handleList" />
		<span class="cursor-pointer">Load List</span>
	</label>
	<button class="bg-green-300" @click="login">Login</button>
	<div v-for="(show, i) in shows" :key="i">{{ show.seriesTitle }}</div>
</template>

<script lang="ts">
import { Anime, List } from "~/models/interfaces/List";

export default defineNuxtComponent({
	__defaults: {
		challenge: ""
	},
	data() {
		return {
			shows: new Array<Anime>(),
		}
	},
	methods: {
		login() {
			// try {
			// 	await this.$axios.$get("/login");
			// } catch (error) {
			// 	console.error(error);
			// }
			const challenge = window.crypto.getRandomValues(new Uint32Array(8)).join("_");
			const searchParams = new URLSearchParams();
			searchParams.append("response_type", "code");
			searchParams.append("client_id", "29a9c9f7896cdb534873fb32235541d0");
			searchParams.append("code_challenge", challenge.toString());
			searchParams.append("state", "test");
			const url = new URL("https://myanimelist.net/v1/oauth2/authorize?" + searchParams.toString());
			window.location.href = url.toString();
		},
		async handleList(event: Event) {
			const files = (event.target as HTMLInputElement).files;
			if (files) {
				const file = files[0];
				// const json = parse(camelCase(await file.text())) as List;
				// this.shows = json.myanimelist.anime.filter((show) => show.myStatus === "Completed");
			}
		}
	},
	async setup() { }
})
</script>

<style>
</style>
