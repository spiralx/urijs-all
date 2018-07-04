import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import { pkg, COMMON_BUILD_OPTIONS } from './config/build-config'

// --------------------------------------------------------------------

export default [
  {
    input: 'src/index.js',

    output: {
      format: 'umd',
      file: pkg.browser,
      name: 'URI',
      sourcemap: 'inline'
    },

    plugins: [
      resolve(),
      commonjs()
    ],

    ...COMMON_BUILD_OPTIONS
  },

  {
    input: 'src/index.js',

    externals: Object.keys(pkg.dependencies),

    output: [
      {
        format: 'cjs',
        file: pkg.main,
        sourcemap: true
      },
      {
        format: 'es',
        file: pkg.module,
        sourcemap: true
      }
    ],

    ...COMMON_BUILD_OPTIONS
  }
]
