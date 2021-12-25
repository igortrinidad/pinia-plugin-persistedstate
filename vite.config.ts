import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts'],
    watch: false,
    deps: {
      inline: [
        'vue2',
        '@vue/composition-api',
        'vue-demi',
        'pinia',
      ],
    },
  },
})
