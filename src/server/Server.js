const API_KEY = '251ac7a461ba588030cfa89b0cd75329';

const requests = {
  featureDay: `/trending/movie/day?api_key=${API_KEY}`,
  Week: `/trending/movie/week?api_key=${API_KEY}`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}`,
  Intheaters: `/movie/now_playing?api_key=${API_KEY}`,
  UpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
  popularMovie: `/movie/popular?api_key=${API_KEY}`,
  popularTV: `/tv/popular?api_key=${API_KEY}`,

};

export default requests;