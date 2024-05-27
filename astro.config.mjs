import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
    base: '/hello',
    vite: {
        plugins: [yaml()]
    }
});