<template>
  <div class="background-all">
    <NavTop />
    <Preloader v-if="showHideSpinner" />
    <Nuxt class="pt-20 bg-blue-100" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showHideSpinner: true
    }
  },
  beforeCreate () {
    this.showHideSpinner = true
  },
  mounted () {
    this.showHideSpinner = false
  }
}
</script>
