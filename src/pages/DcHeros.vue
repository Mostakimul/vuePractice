<template>
    <div class="w-full flex">
        <div class="m-auto">
            <div class="bg-gradient-to-tr from-blue-600 to-blue-300  mt-4 p-4">
                <h3 class="text-3xl font-medium text-center mb-3">
                    DC Heros ({{ totalHeros }})
                </h3>
                <ul class="hero mb-4">
                    <li
                        class="flex justify-between"
                        v-for="(hero, index) in dcHeros"
                        :key="hero.name"
                    >
                        <p>{{ hero.name }}</p>
                        <button @click="removeHero(index)">x</button>
                    </li>
                </ul>
                <form @submit.prevent="addHero">
                    <input
                        v-model.trim="newHero"
                        placeholder="Enter your hero name"
                    />
                    <!-- trim, lazy (usefull for textarea), number -->
                    <button type="submit">Add Hero</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DcHeros',

    data() {
        return {
            newHero: '',
            dcHeros: [
                { name: 'Mohit' },
                { name: 'Karim' },
                { name: 'Mostakimul' },
            ],
        }
    },

    methods: {
        addHero() {
            // alert("added");
            if (this.newHero != '') {
                this.dcHeros.push({ name: this.newHero })
                this.newHero = ''
            }
        },
        removeHero(index) {
            this.dcHeros = this.dcHeros.filter((hero, i) => i != index)
        },
    },

    computed: {
        totalHeros() {
            return this.dcHeros.length
        },
    },
}
</script>

<style scoped>
/* .hero {
  list-style: none;
} */
</style>
