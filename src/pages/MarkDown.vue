<template>
    <h1 class="text-center text-2xl font-semibold my-6">Mark Down App</h1>
    <section class="grid grid-cols-2 h-screen mx-12">
        <article class="border">
            <textarea
                class="w-full h-full"
                :value="text"
                @input="update"
            ></textarea>
        </article>
        <article class=" border bg-gray-100" v-html="markedText"></article>
    </section>
</template>

<script>
import marked from 'marked'
export default {
    data() {
        return {
            text: '',
            timeout: '',
        }
    },
    methods: {
        update(e) {
            const task = () => (this.text = e.target.value)
            this.debounce(task)
        },
        debounce(func, wait = 1000) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(func, wait)
        },
    },
    computed: {
        markedText() {
            return marked(this.text)
        },
    },
}
</script>

<style></style>
