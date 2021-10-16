<template>
	<div>
		<slot />
	</div>
</template>

<script lang="ts">
export default defineNuxtComponent({
	name: "DefaultLayout"
})
</script>

<style lang="postcss">
.dark-mode {
	@apply text-gray-100 bg-gray-900;
}
.light-mode {
	@apply text-gray-900 bg-gray-100;
}
</style>
