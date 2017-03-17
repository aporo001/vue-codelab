<template>
  <div class="thumbnail">
      <img :src="imageData.thumbnailUrl" :alt="imageData.title">
      <div class="caption">
        <h3>{{ imageData.title }}</h3>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'item',
    props: ['imageData']
  }
</script>
