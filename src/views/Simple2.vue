<template>
  <div>
    <h1>Welcome to the login page</h1>
    <v-flex xs4>
      <v-text-field
      v-model="email"
      label="E-Mail"
      prepend-icon="mdi-email"
      id="email"
      ></v-text-field>
    </v-flex>
    <v-flex xs4>
        <v-text-field
        v-model="password"
        label="Password"
        prepend-icon="mdi-lock"
        id="password"
        ></v-text-field>
    </v-flex>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      console.log(this.email)
    }
  }
}
</script>
