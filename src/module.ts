import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  addPlugin,
} from '@nuxt/kit'
import { registerTailwindPath } from '@owdproject/nuxt-kit-tailwind/kit/registerTailwindPath'

export default defineNuxtModule({
  meta: {
    name: 'desktop-app-dino',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // add components

    addComponentsDir({
      path: resolve('./runtime/components'),
    })

    // add plugins

    addPlugin(resolve('./runtime/plugin'))

    // add public folder

    // Keep assets registered by the host and other modules. App assets live
    // under /dino so Nitro can serve them alongside the desktop's public files.
    nuxt.options.nitro.publicAssets ??= []
    nuxt.options.nitro.publicAssets.push({
      dir: resolve('./public/dino'),
      baseURL: '/dino',
    })

    // configure tailwind

    registerTailwindPath(
      nuxt,
      resolve('./runtime/components/**/*.{vue,mjs,ts}'),
    )
  },
})
