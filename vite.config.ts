import { resolve } from "node:path"
import { defineConfig } from "vite"

const inputFiles = [
  "index.html",
]

function buildInput() {
  return Object.fromEntries(
    inputFiles.map((file) => [file, resolve(__dirname, file)]),
  )
}

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: buildInput(),
    },
  },
  test: {
    coverage: {
      provider: "istanbul",
      // provider: "c8",
    },
  },
})
