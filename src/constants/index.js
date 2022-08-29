const base_url ='https://api.themoviedb.org/3/search/movie?';
const api_key ='23409b71e4666ec61b3283faca372336';
//const api_access_token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQwOWI3MWU0NjY2ZWM2MWIzMjgzZmFjYTM3MjMzNiIsInN1YiI6IjYyZjE3ZDkzY2VlMmY2MDA3YThkZGI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6VQB9kOAceadtXcbZibovwL3J8BFkSB5AUS27x_0Gg';

export const movieGet = movie => `${base_url}api_key=${api_key}&query=${movie}&page=1&include_adult=false`;

export const routes = [
    {_id:1, watchlist: '/', selected: true},
    {_id:2, watched: '/watched', selected: false},
    {_id:3, favorites: '/favorites', selected: false},
];