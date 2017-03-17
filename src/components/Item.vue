<template>
  <div class="thumbnail">
      <img :src="imageData.url" :alt="imageData.title">
      <div class="caption">
        <h3>{{ imageData.title }}</h3>
          <router-link :to="{ name: 'edit', params: { photoId: imageData.id }}"><span class="glyphicon glyphicon-edit"></span></router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'item',
    props: ['imageData']
  }
</script>
