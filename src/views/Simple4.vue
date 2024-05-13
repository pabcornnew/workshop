<template>
  <div>
    <v-flex>
      <v-text-field
        v-model="name"
        label="Your Name"
        prepend-icon="mdi-hand-pointing-right"
        id="name"
        type="text"
      ></v-text-field>
    </v-flex>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    if (localStorage.name) {
      this.name = localStorage.name
    }
  },
  watch: { name (newName) { localStorage.name = newName } }
}
</script>
