<template>
  <div>
    <h1>Simple Page</h1>
    <h1 v-if="show">{{name}}</h1>
    <v-btn color="success" @click="show = !show">switch</v-btn>
    <v-btn color="success" @click="callAlert()">alert</v-btn>
     <v-row>
      <v-col cols="3" v-for="(item,index) in catlist" :key="index">
       <v-card width="350">
      <v-img :src="item.img"></v-img>
      <v-card-title primary-title>
        <span>{{item.name}}</span>
      </v-card-title>
      <v-btn color="info" @click="callAlertParam(item.name)">info</v-btn>
    </v-card>
      </v-col>
      <v-col cols="12">
        <v-text-field
          name="name"
          label="name"
          id="name"
          v-model="name"
        ></v-text-field>
         <v-btn color="info" @click="callAlertParam(name)">info</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Metasit Rason',
      show: false,
      catlist: [
        { name: 'แมวยืน', img: 'https://i.pinimg.com/236x/ec/88/23/ec88237079284a706a2bd5a3e20b6d0c.jpg' },
        { name: 'แมวอ้วน', img: require('../assets/fatcat.jpeg') }
      ]
    }
  },
  methods: {
    callAlert () {
      alert('โฮ่ง')
    },
    callAlertParam (item) {
      alert(item)
    }
  }
}
</script>

<style>

</style>
