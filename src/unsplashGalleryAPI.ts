import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = "Q_131Q_6b09n77czYl8QXA0aGjBr8iB4AtptVAkg924";


export const fetchImages = async (query: string, page: number): Promise<{ items: any[] } | {items: []}> => {
  try {
    const response = await axios.get("search/photos", {
      params: {
        page,
        per_page: 20,
        query,
        orientation: "landscape",
        client_id: accessKey,
      },
    });
    return {
      items: response.data.results,
    };
  } catch (error) {
    console.error("Error fetching images:");
    return {
      items: [],
    };
  }
};
