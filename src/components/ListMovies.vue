<script>
import Movie from './Movie.vue'
import { store } from '../store.js';

export default {
    name: 'ListMovies',
    components: {
        Movie
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <div class="container">
        <Movie v-for="movie in store.movieList" :details="movie" />
    </div>
</template>

<style scoped></style>