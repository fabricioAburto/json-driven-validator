import copy from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
      },
    ],
    plugins: [
      external(),
      resolve(),
      terser(),
      copy({
        targets: [{ src: 'src/index.d.ts', dest: 'dist' }],
      }),
    ],
  },
];
