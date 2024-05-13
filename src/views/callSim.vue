<template>
  <div>
    <p>Hello</p>
  </div>
</template>

<script>
import { eventBus } from '@/EventBus'

export default {
  props: ['name'],
  mounted () {
    eventBus.$on('SimComCallAlert', this.SimComAlert)
  },
  methods: {
    callMain () {
      eventBus.$emit('MainCallAlert')
    },
    SimComAlert () {
      alert('Huh?')
    }
  }
}
</script>
