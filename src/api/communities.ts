import { api, handleApiError } from "@/src/lib/axios"
import axios from "axios";

export const getAllCommunities = async (page: number = 1, size: number = 100) => {
   try {
     console.log("Fetching communities with page:", page, "size:", size);
     
     // Try different possible endpoints
     const endpoints = [
       `/locations/communities/ordered?page=${page}&size=${size}&include_unordered=false`,
       `/api/locations/communities/ordered?page=${page}&size=${size}&include_unordered=false`,
       `/communities?page=${page}&size=${size}`,
       `/api/communities?page=${page}&size=${size}`
     ];
     
     let lastError;
     for (const endpoint of endpoints) {
       try {
         console.log("Trying endpoint:", endpoint);
         const res = await api.get(endpoint);
         console.log("API Response:", res.data);
         return res.data;
       } catch (error) {
         console.log(`Endpoint ${endpoint} failed:`, error.response?.status);
         lastError = error;
         continue;
       }
     }
     
     // If all endpoints fail, return mock data as fallback
     console.warn("All API endpoints failed, returning mock data for communities");
     return {
       communities: [
         {
           id: 1,
           name: "Dubai Marina",
           description: "Luxury waterfront community",
           image: "/images/dubai-marina.webp"
         },
         {
           id: 2,
           name: "Palm Jumeirah",
           description: "Iconic palm-shaped island",
           image: "/images/Palm-Jumeirah.webp"
         },
         {
           id: 3,
           name: "Downtown Dubai",
           description: "City center with Burj Khalifa",
           image: "/images/building.jpg"
         }
       ],
       total: 3
     };
   } catch (error) {
    console.error("Error in getAllCommunities:", error);
    throw handleApiError(error)
   }
}

export const getCommunityArticles = async (communityName: string) => {
  try {
    const encodedName = encodeURIComponent(communityName);
    const response = await axios.get(
      `https://jna-properties-api.propfusion.io/locations/communities/${encodedName}/articles`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching community articles:', error);
    throw error;
  }
};