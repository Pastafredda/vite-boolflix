import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=d1907148bf5e85527c7a11585a706d5d&query=movies",
    movieList: []
})