import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export default defineConfig({site:'https://peaceayegba.github.io', markdown:{remarkPlugins:[remarkMath],rehypePlugins:[rehypeKatex]}});
