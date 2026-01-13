import {
  getActionMovies,
  getComedyMovies,
  getCriticallyAcclaimedMovies,
  getHiddenGemMovies,
  getHindiMovies,
  getKannadaMovies,
  getMalayalamMovies,
  getPopularMovies,
  getRomanticMovies,
  getTamilMovies,
  getTeluguMovies,
  getThrillerMovies,
  getTopRatedMovies,
  getTrendingIndiaMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../../../api/moviesApi";

export const fetchTrendingMovies = () => {
  return getTrendingMovies();
};
export const fetchPopularMovies = (page = 1) => {
  return getPopularMovies(page);
};
export const fetchTopRatedMovies = (page = 1) => {
  return getTopRatedMovies(page);
};
export const fetchUpcomingMovies = (page = 1) => {
  return getUpcomingMovies(page);
};

// Indian Movies
export const fetchTrendingIndiaMovies = () => {
  return getTrendingIndiaMovies();
};
export const fetchIndianMovies = (page = 1) => {
  return fetchIndianMovies(page);
};

// Indian Language Movies
export const fetchHindiMovies = (page = 1) => {
  return getHindiMovies(page);
};
export const fetchMalayalamMovies = (page = 1) => {
  return getMalayalamMovies(page);
};
export const fetchTamilMovies = (page = 1) => {
  return getTamilMovies(page);
};
export const fetchTeluguMovies = (page = 1) => {
  return getTeluguMovies(page);
};
export const fetchKannadaMovies = (page = 1) => {
  return getKannadaMovies(page);
};

// Categorised Movies
export const fetchActionMovies = (page = 1) => {
  return getActionMovies(page);
};
export const fetchComedyMovies = (page = 1) => {
  return getComedyMovies(page);
};
export const fetchRomanticMovies = (page = 1) => {
  return getRomanticMovies(page);
};
export const fetchThrillerMovies = (page = 1) => {
  return getThrillerMovies(page);
};
export const getHorrorMovies = (page = 1) => {
  return getHorrorMovies(page);
};
export const getFamilyMovies = (page = 1) => {
  return getFamilyMovies(page);
};
export const fetchCriticallyAcclaimedMovies = (page = 1) => {
  return getCriticallyAcclaimedMovies(page);
};
export const fetchHiddenGemMovies = (page = 1) => {
  return getHiddenGemMovies(page);
};
