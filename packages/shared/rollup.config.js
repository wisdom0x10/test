import typescript from '@rollup/plugin-typescript'
import clear from 'rollup-plugin-clear'
import terser from '@rollup/plugin-terser'

export default {
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    banner: '// Create by wisdom0x10'
    // plugins: [terser()]
  },
  plugins: [clear({ targets: ['dist'] }), typescript()]
}
