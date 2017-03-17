<template>
  <div id="app">
    <Nav3/>
    <div class="container">
      <router-view></router-view>
    </div>
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
