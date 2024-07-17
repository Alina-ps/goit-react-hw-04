import axios from "axios";

const fectImages = async (query, page = 0) => {
  const response = await axios.get(
    `<https://api.unsplash.com/search/collections>`,
    {
      params: {
        query,
        page,
      },
    }
  );
  return response.data;
};

export default fetchImages;
