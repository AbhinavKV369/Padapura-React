const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const apiClient = async(endpoint,options) =>{
    const url = `${BASE_URL}${endpoint}?${API_KEY}`;
    try {
        const response = await fetch(url,options);
        if(!response.ok){
            throw new Error("Failed to fetch API");
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}