<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-flex>
          <v-text-field
            v-model="name"
            label="Your Name"
            prepend-icon="mdi-hand-pointing-right"
            id="name"
            type="text"
          ></v-text-field>
          <h1 :name="name"></h1>
        </v-flex>
      </v-col>
      <v-col cols="auto">
        <v-flex>
          <v-text-field
          v-model="myCat"
          id="myCat"
          type="text"
          label="Your Cat Name"
          ></v-text-field>
          <v-btn @click="removeCat()">Clear</v-btn>
          <v-btn @click="setCat()">Default</v-btn>
          <v-btn @click="getCat()">Show in Alert</v-btn>
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      name: 'Pab',
      myCat: ''
    }
  },
  prop: ['name'],
  methods: {
    setCat () {
      localStorage.setItem('myCat', 'Tom')
      this.myCat = localStorage.getItem('myCat')
    },
    getCat () {
      alert(this.myCat = localStorage.getItem('myCat'))
    },
    removeCat () {
      this.myCat = localStorage.removeItem('myCat')
    },
    callMain () {
      this.$emit('callAlert')
    }
  },
  mounted () {
    if (localStorage.name) {
      this.name = localStorage.name
    }
    if (localStorage.myCat) {
      this.myCat = localStorage.myCat
    }
  },
  watch: {
    name (newName) {
      localStorage.name = newName
    },
    myCat (newCat) {
      localStorage.myCat = newCat
    }
  }
}
</script>
