<template>
  <v-container fluid=true style="background-image: url('../../public/pictures/Focal-Fossa_GREY.jpg')">
    <v-row dense>
      <v-col>
        <h2 style="text-align: center;">Profile</h2>
        <CardIMG/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardIMG from '../components/CardImg.vue'

export default {
  name: 'myCard',

  components: {
    CardIMG
  }
}
</script>
