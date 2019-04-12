import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import graphql from '@kocal/rollup-plugin-graphql'
import cleanup from 'rollup-plugin-cleanup'
import alias from 'rollup-plugin-alias'
import path from 'path'
import { name, dependencies } from '../../package.json'
const isWin = process.platform === "win32";
const slash = isWin ? '\\' : '/'
const base = path.resolve(__dirname, '../..')
const components = path.resolve(base, 'src/components')
const dist = path.resolve(base, 'lib')
const src = path.resolve(base, 'src')
const _default = filePath => {
    const componentPath = path.resolve(filePath).replace(components + slash, '')

    const externals = ['vue', name, ...Object.keys(dependencies)]

    return {
        input: 'src/components/' + componentPath,
        output: {
            file: path.resolve(dist, 'components/' + componentPath.replace('.vue', '.js'))
        },
        external: path => {
            let result = false

            for (const key in externals) {
                if (path == externals[key]) {
                    result = true
                } else if (path.indexOf(externals[key] + '/') === 0) {
                    result = true
                }
            }

            return result
        },
        plugins: [
            graphql(),
            commonjs(),
            vue(),
            alias({
                resolve: ['.jsx', '.js', '.graphql'],
                '~': src
            }),
            cleanup()
        ]
    }
}

export default _default