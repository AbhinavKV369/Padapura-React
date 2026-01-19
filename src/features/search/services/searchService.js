import React from 'react'
import { apiClient } from '../../../services/apiClient';

const searchMovies = (query) => {
    if(!query) return Promise.resolve({result:[]});
    return apiClient(`/search/movie&query=${encodeURIComponent(query)}`);
}

export default searchMovies;