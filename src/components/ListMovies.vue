<script>
import Movie from './Movie.vue';
import { store } from '../store.js';

export default {
    name: 'ListMovies',
    components: {
        Movie,
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <h2>FILM</h2>
    <div class="container">
        <Movie v-for="movie in store.movieList" :details="movie" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
</style>