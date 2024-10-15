// src/api.js

const baseURL = 'http://localhost:3000'; // Adjust to your JSON server URL

// Function to fetch data
export const fetchData = async (endpoint, query) => {
  try {
    const url = `${baseURL}${endpoint}?query=${encodeURIComponent(query)}`;
    console.log("Request URL:", url); // Log the URL for debugging
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the component
  }
};
