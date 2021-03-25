<template>
    <div>
<!--      <h1>加载中。。。</h1>-->
<!--      <h1>加载中。。。</h1>-->
    </div>
</template>

<script>
  export default {
    name: 'loading',
    mounted() {
      // localStorage.clear()
      const localStorageUserAuth = window.localStorage.getItem('userAuth')
      if (localStorageUserAuth === 'app-manager') {
        this.$router.replace('/home')
      } else if (localStorageUserAuth === 'app-captain') {
        this.$router.replace('/ship-index')
      } else if (!localStorageUserAuth) {
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>

</style>
