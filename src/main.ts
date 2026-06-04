import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@closerclick/closer-click-support'
import { createBackNav } from '@closerclick/closer-click-nav'

// Navegación "volver" unificada del ecosistema (chevron flotante + botón físico
// de Android / gesto de iOS / atrás del navegador → closer.click).
createBackNav()

createApp(App).mount('#app')