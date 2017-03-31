import Vue from 'vue'
import App from './App.vue'
import Box from 'vue-polymer-layout'
// import Box from '../../../dist/main.js'

Vue.use(Box)

new Vue({
  el: '#app',
  render: h => h(App)
})
