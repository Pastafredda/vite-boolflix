<script>
import { store } from './store.js';
import axios from 'axios';
import Header from './components/Header.vue';
import ListMovies from './components/ListMovies.vue'
import ListTvSeries from './components/ListTvSeries.vue'
import Main from './components/Main.vue';

export default {
    components: {
        Header,
        ListMovies,
        ListTvSeries,
        Main
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMovies() {
            let myUrl = store.movieUrl
            let seriesUrl = store.tvSeriesUrl
            if (store.searchText !== '') {
                myUrl += `&${store.apiParameter}=${store.searchText}`;
                seriesUrl += `&${store.apiParameter}=${store.searchText}`;
            }
            axios.get(seriesUrl)
                .then(res => {
                    store.tvSeriesList = res.data.results;

                })
                .catch(err => {
                    console.log(err);
                })
            axios.get(myUrl)
                .then(res => {
                    store.movieList = res.data.results;

                })
                .catch(err => {
                    console.log(err);
                })

        },
    },
    created() {
        this.getMovies();
    }
}
</script>

<template>
    <Header @mysearch="getMovies" />
    <ListMovies />
    <ListTvSeries />
    <Main />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
