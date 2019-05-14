import glob from 'glob'
import path from 'path'
import getConfig from './config'
import getConfigStore from './config.store'
import getConfigLocal from './config.local'

let configs = []
const dirComponents = path.resolve(__dirname, '../components/')
const files = glob.sync(dirComponents + '/**/*.vue')
for (const key in files) {
  configs = [...configs, getConfig(files[key])]
}

const dirStores = path.resolve(__dirname, '../store/')
const storeFiles = glob.sync(dirStores + '/**/*.js')

for (const key in storeFiles) {
  configs = [...configs, getConfigStore(storeFiles[key])]
}

const dirLocales = path.resolve(__dirname, '../locales/')
const localeFiles = glob.sync(dirLocales + '/*/index.js')
for (const key in localeFiles) {
  configs = [...configs, getConfigLocal(localeFiles[key])]
}

export default configs