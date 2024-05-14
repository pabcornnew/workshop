<template>
  <div>
    <div>
      <h1>API CONNET</h1>
        <!-- <h2>{{ apidata }}</h2> -->
        <v-btn class="mb-3" color="success" @click="getData()">callapi</v-btn>
    </div>
    <v-row>
      <v-col cols="4" v-for="(item, index) in apidata" :key="index">
        <v-card width="400">
          <v-img src="../assets/fatcat.jpeg"></v-img>
          <v-card-title primary-title>
            <span>User Name: {{ item.username }}</span>
            <span>Name: {{ item.first_name }} {{ item.last_name }}</span>
            <span>Age: {{ item.age }}</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //   apidata: [],
      id: '',
      apidata: [],
      postdata: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        age: 0,
        grant_access: 'false'
      },
      postdatafault: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        age: 0,
        grant_access: 'false'
      }
    }
  },
  methods: {
    async getData () {
      try {
        const gotdata = await this.axios.get('http://localhost:3000/users')
        this.apidata = gotdata.data
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style>
</style>
