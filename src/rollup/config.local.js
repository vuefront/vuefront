import commonjs from 'rollup-plugin-commonjs'
import graphql from '@kocal/rollup-plugin-graphql'
import cleanup from 'rollup-plugin-cleanup'
import json from 'rollup-plugin-json'
import alias from 'rollup-plugin-alias'
import path from 'path'
import { name, dependencies } from '../../package.json'
const isWin = process.platform === "win32";
const slash = isWin ? '\\' : '/'
const base = path.resolve(__dirname, '../..')
const locales = path.resolve(base, 'src/locales/')
const dist = path.resolve(base, 'lib')
const src = path.resolve(base, 'src')
const _default = filePath => {
    const componentPath = path.resolve(filePath).replace(locales + slash, '')
    return {
        input: 'src/locales/' + componentPath,
        output: {
            file: path.resolve(dist, 'locales/' + path.dirname(componentPath)+'.js')
        },
        plugins: [
            json(),
            commonjs(),
            alias({
                resolve: ['.jsx', '.js', '.graphql'],
                '~': src
            }),
            cleanup()
        ]
    }
}

export default _default