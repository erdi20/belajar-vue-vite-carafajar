<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>
<template>
  <Navbar></Navbar>

  <router-view></router-view>
</template>