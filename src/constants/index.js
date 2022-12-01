const base_url ='https://api.themoviedb.org/3/';
const api_key ='23409b71e4666ec61b3283faca372336';
const api_access_token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQwOWI3MWU0NjY2ZWM2MWIzMjgzZmFjYTM3MjMzNiIsInN1YiI6IjYyZjE3ZDkzY2VlMmY2MDA3YThkZGI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6VQB9kOAceadtXcbZibovwL3J8BFkSB5AUS27x_0Gg';
const movie_search_protocol = 'search/movie?api_key=';
const query = '&query='
const config = 'configuration?api_key=';
const img_query = 'https://image.tmdb.org/t/p/' 


export const getImg = (size ,poster_path  ) => `${img_query}${size}/${poster_path}`;
export const getMoviesByKeyword = (keyword) =>`${base_url}${movie_search_protocol}${api_key}${query}${keyword}`;
export const getConfig = () => `${base_url}${config}${api_key}`;

// export const movieGet = movie => `${base_url}api_key=${api_key}&query=${movie}&page=1&include_adult=false`;
