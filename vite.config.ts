// Najděte řádek s adaptérem a změňte ho:
import { cloudflareAdapter } from '@tanstack/start-adapter-cloudflare' // Změna z vercel na cloudflare

export default defineConfig({
  server: {
    preset: 'cloudflare-pages', // Musí zde být cloudflare-pages nebo cloudflare
    adapter: cloudflareAdapter(),
  },
  // ... zbytek kódu
})
