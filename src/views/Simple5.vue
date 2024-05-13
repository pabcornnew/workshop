<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-text-field
        name="name"
        label="name"
        id="name"
        v-model="name"
        ></v-text-field>
        <v-btn color="info" @click="callAlertParam(name)">info</v-btn>
      </v-col>
      <v-col cols="12">
        <simcom :name="name" @callAlert="callAlert" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import simcom from './Simple4.vue'
import { EventBus } from '@/EventBus'
// import CallSim from './callSim.vue'*

export default {
  components: {
    simcom
  },
  data () {
    return {
      name: 'Pabcorn'
    }
  },
  mounted () {
    EventBus.$on('MainCallAlert', this.callAlert)
  },
  methods: {
    CallSim () {
      EventBus.$emit('SimComCallAlert')
    }
  }
}
</script>
