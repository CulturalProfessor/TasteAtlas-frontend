import axios from "axios";
const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: `Client-ID ${
                import.meta.env.VITE_UNSPLASH_ACCESS_KEY
            }`,
        },
        params: {
            query: `${term}`,
        },
    });

    return response.data.results[0].urls.regular;
};

export default searchImages;
