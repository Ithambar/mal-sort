import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
	vue: { config: { performance: true } },
	buildModules: ["nuxt-windicss"],
	privateRuntimeConfig: {
		secret: process.env.SECRET,
		id: process.env.ID
	}
})
