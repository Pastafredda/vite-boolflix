<script>
export default {
    name: 'TvSeries',
    props: {
        details: Object
    }
}
</script>

<template>
    <ul class="series">
        <li>{{ details.name }}</li>
        <li>{{ details.original_name }}</li>
        <li>{{ details.original_language }}</li>
        <li>{{ details.vote_average }}</li>
    </ul>
</template>

<style scoped>
.series {
    padding: 20px;
    border: 1px solid black;
}
</style>