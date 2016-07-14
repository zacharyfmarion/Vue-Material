import Vue from 'vue'
import VueMdl from 'vue-mdl'

// use the mdl plugin
Vue.use(VueMdl)

// import a component
import App from './components/App.vue'

// mount a root vue instance
new Vue({
  el: 'body',
  components: {
    // include required component
    // in the options
    app: App
  }
})
