"use client";
import axios from "axios";

// Base API utility for fetching data
const fetchFromApi = async (endpoint: string, queryParams = {}) => {
  try {
    const response = await axios.get(endpoint, { params: queryParams });
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
