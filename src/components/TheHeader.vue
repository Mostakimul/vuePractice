<template>
  <header class="container mx-auto bg-red-500 py-4">
    <nav class="grid grid-cols-2 place-items-center">
      <div>
        <h2 class="text-2xl font-semibold text-gray-100">Vue Apps</h2>
      </div>
      <div>
        <ul class="flex space-x-4 text-white font-medium">
          <router-link v-for="menu in menus" :key="menu.to" :to="menu.to">
            {{ menu.title }}
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { title: 'Home', to: '/' },
        { title: 'DC Hero', to: '/dc-heros' },
        { title: 'Calender', to: '/calender' },
        { title: 'Mark Down', to: '/mark-down' },
      ],
    };
  },
};
</script>
<style></style>
