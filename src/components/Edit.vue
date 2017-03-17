<template>
  <form class="form-horizontal" v-on:submit.prevent="onSubmit">
<fieldset>

<!-- Form Name -->
<legend>Photos</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="title">Title</label>
  <div class="col-md-4">
  <input id="title" name="title" type="text" placeholder="title" class="form-control input-md" required="" v-model="title">

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="thumbnailUrl">Thumbnail URL</label>
  <div class="col-md-4">
  <input id="thumbnailUrl" name="thumbnailUrl" type="text" placeholder="thumbnail url" class="form-control input-md" required="" v-model="thumbnailUrl">

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="url">URL</label>
  <div class="col-md-4">
  <input id="url" name="url" type="text" placeholder="url" class="form-control input-md" v-model="url">

  </div>
</div>

<!-- Button (Double) -->
<div class="form-group">
  <label class="col-md-4 control-label" for="save"></label>
  <div class="col-md-8">
    <button id="save" name="save" class="btn btn-success">Save</button>
    <button id="cancel" name="cancel" class="btn btn-danger">Cancel</button>
  </div>
</div>

</fieldset>
</form>

</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      id: this.$route.params.photoId,
      title: '',
      url: '',
      thumbnailUrl: ''
    }
  },
  beforeCreate: function beforeCreate () {
    if (this.id !== '' || this.id !== null) {
      this.$http.get('http://localhost:5000/api/v1/photos/' + this.$route.params.photoId)
        .then(response => {
          console.log(response)
          this.title = response.body.title
          this.url = response.body.url
          this.thumbnailUrl = response.body.thumbnailUrl
        }, response => {
          this.title = ''
          this.url = ''
          this.thumbnailUrl = ''
        })
    }
  },
  methods: {
    onSubmit: function () {
      if (this.id !== '' || this.id !== null) {
        this.$http.put('http://localhost:5000/api/v1/photos/' + this.id,
        {title: this.title, url: this.url, thumbnailUrl: this.thumbnailUrl})
          .then(response => {
            this.$router.push({name: 'Home'})
          }, response => {
            this.$router.push({name: 'Home'})
          })
      } else {
        this.$http.post('http://localhost:5000/api/v1/photos',
        {title: this.title, url: this.url, thumbnailUrl: this.thumbnailUrl})
          .then(response => {
            this.$router.push({name: 'Home'})
          }, response => {
            this.$router.push({name: 'Home'})
          })
      }
    }
  }
}
</script>
