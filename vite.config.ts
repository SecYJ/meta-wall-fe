import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
    // publicDir: "./public/*",
});
