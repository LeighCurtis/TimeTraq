/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import Homepage from './components/Homepage.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(Homepage)

registerPlugins(app)

app.mount('#app')
