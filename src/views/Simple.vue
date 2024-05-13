<template>
  <div>
    <h1>Welcome to the simple page</h1>
    <v-btn color="success" @click="show = !show">show</v-btn>
    <h2 v-if="show">{{ data }}</h2>
    <br />
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.message }}</li>
    </ul>
    <v-btn color="success" @click="showswitch()">Yo</v-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: 'Login',
      show: false,
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  },
  methods: {
    showswitch () { alert('Hello World') }
  }
}
</script>
