<template>
    <TheHeader />
    <router-view></router-view>
</template>

<script>
// import DcHeros from "./components/DcHeros.vue";
import TheHeader from './components/TheHeader.vue'
// import Calender from './components/Calender.vue'
export default {
    components: {
        // DcHeros,
        TheHeader,
        // Calender,
    },

    data() {
        return {
            title: 'Vue 3 Title',
        }
    },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
