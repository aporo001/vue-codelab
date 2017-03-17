<template>
  <div id="app">
    <Nav3/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav3 from './components/Nav'

export default {
  name: 'app',
  components: {
    Nav3
  }
}
</script>
