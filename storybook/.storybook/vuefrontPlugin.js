import { app } from '@storybook/vue3';
import * as config from '../../'

const vuefront = {
  images: config.images,
  options: config.options,
  get isAMP() {
    return false
  },
  get params() {
    return {}
  },
  get isClient() {
    return true
  }
}

app.provide('$vuefront', vuefront)

app.config.globalProperties.$vuefront = vuefront
app.$vuefront = vuefront