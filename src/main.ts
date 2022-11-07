/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import { VueMasonryPlugin } from "vue-masonry";

const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .use(VueMasonryPlugin)
  .mount('#app')
