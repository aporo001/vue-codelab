<template>
  <div class="row" >
    <div class="col-sm-6 col-md-4" v-for="item in listItems">
      <Item :imageData="item"></Item>
    </div>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'list-item',
  props: ['listItems'],
  components: {
    Item
  }
}
</script>
