const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const apiClient = async (endpoint, options = {}) => {
    
  const joiner = endpoint.includes("?") ? "&" : "?";
  const url = `${BASE_URL}${endpoint}${joiner}api_key=${API_KEY}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.status_message || "Failed to fetch API"
      );
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
