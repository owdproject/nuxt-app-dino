import { defineNuxtPlugin } from 'nuxt/app'
import { useDesktopApplication } from '@owdproject/nuxt/runtime/composables/useDesktopApplication'

export default defineNuxtPlugin({
  name: 'app-dino-playground-launch',
  dependsOn: ['desktop-app-dino-register'],
  setup(nuxtApp) {
    const applications = useDesktopApplication()
    const openDino = () => {
      void applications.exec('org.owdproject.dino', 'dino')
    }

    // The desktop app is registered by the dependency plugin. Wait until
    // Nuxt has completed plugin setup before invoking its launch command.
    nuxtApp.hook('app:mounted', openDino)
  },
})
