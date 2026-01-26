const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export const getImageUrl = (path) => {
  if (!path) return null;
  return path ? `${IMAGE_BASE_URL}${path}` : "/placeholder.png";
};
