import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
	vue: { config: { performance: true } },
	buildModules: ["nuxt-windicss"]
})
