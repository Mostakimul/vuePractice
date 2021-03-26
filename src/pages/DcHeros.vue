<template>
    <div class="w-1/2 bg-yellow-400 mx-auto text-center p-5 mt-6 rounded">
        <h1 class="text-3xl font-medium text-center mb-3">
            DC Heros ({{ totalHeros }})
        </h1>
        <div class="w-3/4 bg-gray-100 mx-auto rounded-lg">
            <ul class=" p-4">
                <li
                    class="grid grid-cols-2 bg-gray-300 m-1 p-2 rounded-lg"
                    v-for="(hero, index) in dcHeros"
                    :key="hero.name"
                >
                    <p>{{ hero.name }}</p>
                    <button @click="removeHero(index)">x</button>
                </li>
            </ul>
        </div>
        <div class="mt-4">
            <form @submit.prevent="addHero">
                <input
                    class="p-2 rounded outline-none shadow-lg"
                    v-model.trim="newHero"
                    placeholder="Enter your hero name"
                />
                <!-- trim, lazy (usefull for textarea), number -->
                <button
                    class="ml-4 bg-gray-200 py-2 px-4 rounded shadow-lg hover:bg-gray-100 transition delay-150"
                    type="submit"
                >
                    Add Hero
                </button>
            </form>
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
