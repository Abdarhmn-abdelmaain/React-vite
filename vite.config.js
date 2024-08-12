import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
// // base: "https://retrofit.easetasks",
// // resolve: {
// //   alias: {
// //     "@": path.resolve(__dirname,"srs"),

// //   },
// // },

//   plugins: [react()],
//   // optimizeDeps: {
//   //   exclude: ["apexcharts","react-apexcharts"],
//   // },
// });

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/your-subdirectory">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
