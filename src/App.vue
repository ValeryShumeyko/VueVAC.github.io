<template>
    <navbar></navbar>
    <div class="app">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
</template>

<script>
import Navbar from "@/components/Navbar";
import MyFooter from "@/components/MyFooter";


export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style>
body._lock {
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto';
}
a {
  text-decoration: none;
}
.app {
  padding: 0px 20px;
  max-width: 1240px;
  margin: 0 auto;
  min-height: calc(100vh - 133px);
}


</style>
