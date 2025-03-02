import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        watch: true, // Включает режим наблюдения
        includeSource: ["src/**/*.{ts,tsx,js,jsx}"], // Следит за изменениями в `src`
    },
    resolve: {
        conditions: ['node'], // Используется для корректного импорта модулей
    }
});
