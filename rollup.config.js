import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
  input: "src/lib/ReactSplitViews.js",
  output: [
    {
      name: "ReactSplitViews",
      file: packageJson.main,
      format: "umd",
      sourcemap: false
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      presets: ['@babel/env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),    
    commonjs(),
    terser()
  ]
};