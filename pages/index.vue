<template>
	<div class="flex gap-4 m-4">
		<label class="rounded px-4 py-1 border-black border cursor-pointer hover:bg-gray-300">
			<input class="hidden" type="file" accept=".xml" @change="handleList" />
			<span class>Load List</span>
		</label>
		<button
			class="bg-green-300 rounded px-4 py-1 border-black border hover:bg-green-500"
			@click="login"
		>Login</button>
	</div>
	<div class="flex mx-4" v-for="(show, i) in shows" :key="i">{{ show.seriesTitle }}</div>
</template>

<script lang="ts">
import { Anime, List } from "~/models/interfaces/List";
import { parse } from "fast-xml-parser"
import camelcase from "camelcase"

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
				const json = parse(camelcase(await file.text())) as List;
				shows.value = json.myanimelist.anime.filter((show) => show.myStatus === "completed");
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
