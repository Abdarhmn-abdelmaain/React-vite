import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
base: "https://retrofit.easetasks",
resolve: {
  alias: {
    "@": path.resolve(__dirname,"srs"),

  },
},

  plugins: [react()],
  optimizeDeps: {
    exclude: ["apexcharts","react-apexcharts"],
  },
});
