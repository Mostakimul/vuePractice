<template>
  <app-header></app-header>
  <div class="w-full flex">
    <div class="m-auto">
      <dc-heros></dc-heros>
    </div>
  </div>
</template>

<script>
import DcHeros from "./components/DcHeros.vue";
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    DcHeros,
    AppHeader,
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
