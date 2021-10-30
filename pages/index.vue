<template>
	<div class="flex gap-4 mx-4 py-4">
		<label
			class="rounded px-4 py-1 border-black border cursor-pointer hover:bg-gray-300 dark:bg-gray-500"
		>
			<input class="hidden" type="file" accept=".xml" @change="handleList" />
			<span class>Load List</span>
		</label>
		<button
			class="bg-green-500 rounded px-4 py-1 border-black border hover:bg-green-300"
			@click="login"
		>Login</button>
	</div>
	<div
		class="flex mx-4 dark:text-light-200"
		v-for="(show, i) in shows"
		:key="i"
	>{{ show.series_title }}</div>
</template>

<script lang="ts">
import { Anime, List } from "~/models/interfaces/List";
import { parse } from "fast-xml-parser"

export default defineNuxtComponent({
	async setup(props, context) {
		const shows = ref(new Array<Anime>());
		async function login() {
			try {
				await useFetch('/login')
			} catch (error) {
				console.error(error);
			}
			const challenge = window.crypto.getRandomValues(new Uint32Array(8)).join("_");
			const searchParams = new URLSearchParams();
			searchParams.append("response_type", "code");
			searchParams.append("client_id", "29a9c9f7896cdb534873fb32235541d0");
			searchParams.append("code_challenge", challenge.toString());
			searchParams.append("state", "test");
			const url = new URL("https://myanimelist.net/v1/oauth2/authorize?" + searchParams.toString());
			window.location.href = url.toString();
		}
		async function handleList(event: Event) {
			const files = (event.target as HTMLInputElement).files;
			if (files) {
				const file = files[0];
				const json = parse(await file.text()) as List;
				console.log(json);

				shows.value = json.myanimelist.anime.filter((show) => show.my_status === "Completed");
			}
		}
		return {
			challenge: ref(""),
			shows,
			login,
			handleList
		}
	}
})
</script>

<style>
</style>
