<template>
  <div>
    index
  </div>
</template>

<script> import { login } from '@/api'

export default {
  mounted () {
    login().then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>
