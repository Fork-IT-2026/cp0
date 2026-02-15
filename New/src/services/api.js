const BASE_URL = 'https://api.foodoscope.com/recipe2-api';
const FLAVORDB_BASE_URL = 'https://api.foodoscope.com/flavordb';

const API_KEY = import.meta.env.VITE_FOODOSCOPE_API_KEY || 'hPje3zbgJPG0qTTnCV6YGLbvB1Vf9EcH8sNfiiIFW17updK4';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'ApiKey': API_KEY,
};

/**
 * Fetch Recipe of the Day
 * Endpoint: /recipe2-api/recipe/recipeofday
 */
export const getRecipeOfDay = async () => {
    try {
        const response = await fetch(`${BASE_URL}/recipe/recipeofday`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipe of the day:', error);
        throw error;
    }
};

export const getRecipeDetail = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/search-recipe/${id}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipe detail for ${id}:`, error);
        throw error;
    }
};

/**
 * Fetch Recipes by Flavor Profile
 * Endpoint: /recipe2-api/ingredients/flavor/{flavor}
 */
export const getRecipeByIngredientsFlavor = async (flavor, page = 1, limit = 4) => {
    try {
        const response = await fetch(`${BASE_URL}/ingredients/flavor/${flavor}?page=${page}&limit=${limit}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipes by flavor ${flavor}:`, error);
        throw error;
    }
};

export const getRecipeByCuisine = async (cuisine) => {
    try {
        const response = await fetch(`${BASE_URL}/recipe-bycuisine/recipeByCuisine?cuisine=${cuisine}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipes by cuisine ${cuisine}:`, error);
        throw error;
    }
};

/**
 * Search Recipe by Title
 * Endpoint: /recipe2-api/recipe-bytitle/recipeByTitle
 */
export const getRecipeByTitle = async (title, page = 1, limit = 12) => {
    try {
        const response = await fetch(`${BASE_URL}/recipe-bytitle/recipeByTitle?title=${title}&page=${page}&limit=${limit}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error searching recipe by title ${title}:`, error);
        throw error;
    }
};

/**
 * Search Ingredients in FlavorDB
 */
export const searchIngredients = async (query) => {
    try {
        const response = await fetch(`${FLAVORDB_BASE_URL}/entities?name=${query}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error searching ingredients for ${query}:`, error);
        throw error;
    }
};

/**
 * Get Ingredient Details from FlavorDB
 */
export const getIngredientDetails = async (id) => {
    try {
        const response = await fetch(`${FLAVORDB_BASE_URL}/entities/${id}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ingredient details for ${id}:`, error);
        throw error;
    }
};

/**
 * Get Ingredient Pairings from FlavorDB
 */
export const getIngredientPairings = async (id) => {
    try {
        const response = await fetch(`${FLAVORDB_BASE_URL}/entities/${id}/pairing`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching pairings for ${id}:`, error);
        throw error;
    }
};

/**
 * Get Random Recipes (Simulated via search)
 * Since there is no direct random endpoint, we search for common terms
 */
export const getRandomRecipes = async (limit = 12) => {
    const commonTerms = ['Chicken', 'Rice', 'Pasta', 'Salad', 'Soup', 'Curry', 'Beef', 'Fish', 'Vegetable', 'Cake'];
    const randomTerm = commonTerms[Math.floor(Math.random() * commonTerms.length)];
    const page = Math.floor(Math.random() * 5) + 1;

    try {
        const response = await fetch(`${BASE_URL}/recipe-bytitle/recipeByTitle?title=${randomTerm}&page=${page}&limit=${limit}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching random recipes via term ${randomTerm}:`, error);
        throw error;
    }
};

/**
 * Get Taste Threshold from FlavorDB
 * Endpoint: /flavordb/properties/taste-threshold?values={taste}&page={page}&size={size}
 */
export const getTasteThreshold = async (taste, page = 0, size = 20) => {
    try {
        const response = await fetch(`${FLAVORDB_BASE_URL}/properties/taste-threshold?values=${taste}&page=${page}&size=${size}`, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching taste threshold for ${taste}:`, error);
        throw error;
    }
};