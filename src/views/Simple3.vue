<template>
  <div>
    <h1>Welcome to Grade Page</h1>
    <v-flex>
      <v-text-field
      v-model="grade"
      label="Your Grade"
      prepend-icon="mdi-hand-pointing-right"
      id="grade"
      type="number"
      ></v-text-field>
    </v-flex>
    <v-btn type="submit" @click="calGrade()">Submit</v-btn>
    <h1></h1>

  </div>
</template>
<script>
export default {
  data () {
    return {
      grade: 0
    }
  },
  methods: {
    calGrade () {
      if (this.grade < 50) {
        return alert(this.grade + ' result: F')
      } else if (this.grade < 60) {
        return alert(this.grade + ' result: D')
      } else if (this.grade < 70) {
        return alert(this.grade + ' result: C')
      } else if (this.grade < 80) {
        return alert(this.grade + ' result: B')
      } else if (this.grade <= 100) {
        return alert(this.grade + ' result: A')
      } else {
        return alert('this grade out of limit\n Please Add number \'0-100\'')
      }
    }
  }
}
</script>
