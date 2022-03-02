require('./bootstrap');

import {createApp} from 'vue'

import App from './App.vue'
import axios from 'axios'
import router from './router'
//import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

const app = createApp(App)
app.config.globalProperties.$axios = axios;

// app.config.globalProperties.$echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     forceTLS: false,
//     wsHost: "127.0.0.1",
//     wsPort: 6001,
//     encrypted: false
// });

app.use(router)
app.mount('#app')
