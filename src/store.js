import { reactive } from 'vue'

export const store = reactive({
    movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=d1907148bf5e85527c7a11585a706d5d&lenguage=it_IT",
    movieList: [],
    tvSeriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT",
    tvSeriesList: [],
    searchText: "",
    apiParameter: "query",

})