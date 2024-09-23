// src/services/serpApi.js
import axios from 'axios';

// const SERP_API_KEY = process.env.VUE_APP_SERP_API_KEY;
const BASE_URL = 'https://serpapi.com/search';

export const fetchSearchResults = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: query,
                api_key: '6fde43a0733bb4579dde6b789de2398b16415eab68ef33abb1b144932de4eac8',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data from SerpApi:", error);
        throw error; 
    }
};
