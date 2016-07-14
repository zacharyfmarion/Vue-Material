<template>
  <div class="app">
    <display></display>
    <counter-controls></counter-controls>
    <mdl-card title="Testing" supporting-text="This is some supporting text" actions="Actions" actions-text="view updates"></mdl-card>
  </div>
</template>

<script>
  import CounterControls from './CounterControls.vue'
  import Display from './Display.vue'
  import store from '../vuex/store'
  import {MdlCard} from 'vue-mdl'

  export default {
    components: {
      CounterControls,
      Display,
      MdlCard
    },
    // Make all child components aware of the store
    store: store
  }
</script>
