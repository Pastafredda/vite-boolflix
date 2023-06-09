<script>
export default {
    name: 'Movie',
    props: {
        details: Object
    }
}
</script>

<template>
    <ul class="movie">
        <li>{{ details.title }}</li>
        <li>{{ details.original_title }}</li>
        <li>{{ details.original_language }}</li>
        <li>{{ details.vote_average }}</li>
    </ul>
</template>

<style scoped>
.movie {
    padding: 20px;
}
</style>