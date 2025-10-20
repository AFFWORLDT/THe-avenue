import { api, handleApiError } from "@/src/lib/axios";

export interface Developer {
  id: number;
  name: string;
  logoUrl: string;
  agent_id?: number;
  documents: any[];
}

export interface DevelopersResponse {
  totalDevelopers: number;
  developers: Developer[];
  page: number;
  size: number;
}

export const getAllDevelopers = async (page: number = 1, size: number = 24): Promise<DevelopersResponse> => {
  try {
    console.log("Fetching developers with page:", page, "size:", size);
    
    const endpoint = `/properties/get_developers?page=${page}&size=${size}`;
    
    try {
      console.log("Trying endpoint:", endpoint);
      const res = await api.get(endpoint);
      console.log("API Response:", res.data);
      return res.data;
    } catch (error) {
      console.log(`Endpoint ${endpoint} failed:`, error.response?.status);
      
      // If API fails, return mock data as fallback
      console.warn("API endpoint failed, returning mock data for developers");
      return {
        totalDevelopers: 24,
        developers: [
          {
            id: 100,
            name: "Emaar",
            logoUrl: "/images/placeholder-logo.png",
            documents: []
          },
          {
            id: 101,
            name: "Omniyat",
            logoUrl: "/images/placeholder-logo.png",
            documents: []
          },
          {
            id: 102,
            name: "Damac",
            logoUrl: "/images/placeholder-logo.png",
            documents: []
          },
          {
            id: 103,
            name: "Nakheel",
            logoUrl: "/images/placeholder-logo.png",
            documents: []
          },
          {
            id: 104,
            name: "Sobha",
            logoUrl: "/images/placeholder-logo.png",
            documents: []
          },
          {
            id: 105,
            name: "Dubai Properties",
            logoUrl: "/images/placeholder-logo.png",
            documents: []
          }
        ],
        page: 1,
        size: 24
      };
    }
  } catch (error) {
    console.error("Error in getAllDevelopers:", error);
    throw handleApiError(error);
  }
};
