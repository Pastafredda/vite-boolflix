<script>
import TvSeries from './TvSeries.vue'
import { store } from '../store.js';

export default {
    name: 'ListTvSeries',
    components: {
        TvSeries
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <h2>TV SERIES</h2>
    <div class="container">
        <TvSeries v-for="series in store.tvSeriesList" :details="series" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
</style>