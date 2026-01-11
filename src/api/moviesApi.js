import { apiClient } from "../services/apiClient";

// World Movies

export const getTrendingMovies = () =>
     apiClient("/trending/movie/week");

export const getPopularMovies = (page = 1) =>
  apiClient(`/movie/popular?page=${page}`);

export const getTopRatedMovies = (page = 1) =>
  apiClient(`/movie/top_rated?page=${page}`);

export const getUpcomingMovies = (page = 1) =>
  apiClient(`/movie/upcoming?page=${page}`);

// Indian Movies

export const getTrendingIndiaMovies = () =>
  apiClient("/trending/movie/week?region=IN");

export const getIndianMovies = (page = 1) =>
  apiClient(
    `/discover/movie?with_origin_country=IN&sort_by=popularity.desc&page=${page}`
  );

// Indian Language Movies

export const getHindiMovies = (page = 1) =>
  apiClient(`/discover/movie?with_original_language=hi&region=IN&page=${page}`);

export const getMalayalamMovies = (page = 1) =>
  apiClient(`/discover/movie?with_original_language=ml&region=IN&page=${page}`);

export const getTamilMovies = (page = 1) =>
  apiClient(`/discover/movie?with_original_language=ta&region=IN&page=${page}`);

export const getTeluguMovies = (page = 1) =>
  apiClient(`/discover/movie?with_original_language=te&region=IN&page=${page}`);

export const getKannadaMovies = (page = 1) =>
  apiClient(`/discover/movie?with_original_language=kn&region=IN&page=${page}`);

// Categorised Movies

export const getActionMovies = (page = 1) =>
  apiClient(`/discover/movie?with_genres=28&page=${page}`);

export const getComedyMovies = (page = 1) =>
  apiClient(`/discover/movie?with_genres=35&page=${page}`);

export const getRomanticMovies = (page = 1) =>
  apiClient(`/discover/movie?with_genres=10749&page=${page}`);

export const getThrillerMovies = (page = 1) =>
  apiClient(`/discover/movie?with_genres=53&page=${page}`);

export const getHorrorMovies = (page = 1) =>
  apiClient(`/discover/movie?with_genres=27&page=${page}`);

export const getFamilyMovies = (page = 1) =>
  apiClient(
    `/discover/movie?certification_country=IN&certification.lte=U&page=${page}`
  );

export const getCriticallyAcclaimedMovies = (page = 1) =>
  apiClient(
    `/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&page=${page}`
  );

export const getHiddenGemMovies = (page = 1) =>
  apiClient(
    `/discover/movie?vote_average.gte=7&vote_count.lte=500&page=${page}`
  );

// Movies by ID

export const getMovieDetails = (id) => apiClient(`/movie/${id}`);

export const getMovieCredits = (id) => apiClient(`/movie/${id}/credits`);

export const getSimilarMovies = (id, page = 1) =>
  apiClient(`/movie/${id}/similar?page=${page}`);
