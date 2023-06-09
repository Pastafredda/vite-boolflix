<script>
import { store } from '../store.js';

export default {
    name: 'Header',
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <div class="search">
        <input type="text" placeholder="inserisci titolo del film" v-model.trim="store.searchText">
        <button @click.prevent="$emit('mysearch')">INVIA</button>
    </div>
</template>

<style scoped>
.search {
    padding: 20px;
}
</style>