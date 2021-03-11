<template>
  <app-header></app-header>
  <!-- <div class="w-full flex">
    <div class="m-auto">
      <dc-heros></dc-heros>
    </div>
  </div> -->
  <calender></calender>
</template>

<script>
// import DcHeros from "./components/DcHeros.vue";
import AppHeader from "./components/AppHeader.vue";
import Calender from "./components/Calender.vue";
export default {
  components: {
    // DcHeros,
    AppHeader,
    Calender,
  },

  data() {
    return {
      title: "Vue 3 Title",
    };
  },
};
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
