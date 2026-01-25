import { defineConfig } from 'vite'

export default defineConfig({
  // Base URL for deployment
  base: './',

  build: {
    // Output directory
    outDir: 'dist',
    // Generate index.html at root
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    },
    // Ensure assets are copied correctly
    assetsDir: 'assets'
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    // Enable history API fallback for SPA routing
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: '/index.html' }
      ]
    }
  },

  // Preview server configuration (for production build testing)
  preview: {
    port: 4173,
    // Enable history API fallback for SPA routing
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: '/index.html' }
      ]
    }
  }
})