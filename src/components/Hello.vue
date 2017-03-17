<template>
  <div>
    <h1>Listdata</h1>
    <ListItem :listItems="list"></ListItem>
  </div>

</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'hello',
  components: {
    ListItem
  },
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    this.$http.get('http://localhost:5000/api/v1/photos')
    .then(response => {
      console.log(response)
      this.list = response.body
    }, response => {
      this.list = []
    })
  }
}
</script>
