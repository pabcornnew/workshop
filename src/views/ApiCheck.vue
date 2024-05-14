<template>
    <div>
        <h2>API CONNECT</h2>
        <v-btn @click="getData()">Connect</v-btn>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      apidata: [],
      postdata: {
        username: '',
        password: '',
        name: ''
      },
      postdefault: {
        username: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    getData () {
      this.axios.get('http://localhost:3000/users').then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>
