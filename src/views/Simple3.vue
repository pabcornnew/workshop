<template>
  <div>
    <h1>Welcome to score Page</h1>
    <v-flex>
      <v-text-field
      v-model="score"
      label="Your score"
      prepend-icon="mdi-hand-pointing-right"
      id="score"
      type="number"
      ></v-text-field>
    </v-flex>
    <v-btn type="submit" @click="calscore()">Submit</v-btn>
    <h1></h1>

  </div>
</template>
<script>
import swal from 'sweetalert2'
export default {
  data () {
    return {
      score: 0
    }
  },
  methods: {
    calscore () {
      if (this.score < 50) {
        return swal.fire(this.score + ' result: F')
      } else if (this.score < 60) {
        return swal.fire(this.score + ' result: D')
      } else if (this.score < 70) {
        return swal.fire(this.score + ' result: C')
      } else if (this.score < 80) {
        return swal.fire(this.score + ' result: B')
      } else if (this.score <= 100) {
        return swal.fire(this.score + ' result: A')
      } else {
        return swal.fire('this score out of limit\n Please Add number \'0-100\'')
      }
    }
  }
}
</script>
