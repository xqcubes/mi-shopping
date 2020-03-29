<template>
  <div class="home">
    <nav-header></nav-header>home
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '_c/NavHeader'
import NavFooter from '_c/NavFooter'

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
