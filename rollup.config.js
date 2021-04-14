import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import atImport from 'postcss-import';
import html from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';
import sveltePreprocess from 'svelte-preprocess';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.ts',
	output: {
        dir: 'dist',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		typescript(),
        svelte({
            include: 'src/**/*.svelte',
      
            // Optionally, preprocess components with svelte.preprocess:
            // https://svelte.dev/docs#svelte_preprocess
            preprocess: sveltePreprocess({}),
      
            // You can pass any of the Svelte compiler options
            compilerOptions: {
              // You can optionally set 'customElement' to 'true' to compile
              // your components to custom elements (aka web elements)
              customElement: false
            }
          }),

        postcss({
            minimize: production,
            extract: true,
            plugins: [
                atImport(),
                postcssNested,
                autoprefixer
            ]
        }),
        resolve({ browser: true }),
        html({
            title: 'Svelte-rollup-boilerplate'
        }),
        !production && livereload({
            watch: 'dist'
        }),
		production && terser() // minify, but only in production
	]
};