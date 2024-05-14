<template>
  <div>
    <div>
      <h1>API CONNET</h1>
        <!-- <h2>{{ apidata }}</h2> -->
        <v-btn class="mb-3" color="success" @click="getData()">callapi</v-btn>
    </div>
    <v-row>
      <v-col cols="3" v-for="(item, index) in apidata" :key="index">
        <v-card width="350">
          <v-img src="../assets/fatcat.jpeg"></v-img>
          <v-card-title primary-title>
            <span>{{ item.username }}</span>
            <span>{{ item.first_name }} {{ item.last_name }}</span>
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
        const data = await this.axios.get('http://localhost:3000/users')
        console.log(data)
        this.apidata = data.data
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style>
</style>
