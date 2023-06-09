<script>
import { store } from './store.js';
import axios from 'axios';
import Header from './components/Header.vue';
import ListMovies from './components/ListMovies.vue'
import Main from './components/Main.vue';

export default {
    components: {
        Header,
        ListMovies,
        Main
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMovies() {
            let myUrl = store.apiUrl
            if (store.searchText !== '') {
                myUrl += `&${store.apiParameter}=${store.searchText}`

            }
            axios.get(myUrl)
                .then(res => {
                    store.movieList = res.data.results;

                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    created() {
        this.getMovies();
    }
}
</script>

<template>
    <Header @mysearch="getMovies" />
    <ListMovies />
    <Main />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
