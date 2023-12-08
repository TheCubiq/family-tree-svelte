import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/family-tree-svelte/",
  plugins: [svelte()],
  server: {
    port: 6969,
  }
})
