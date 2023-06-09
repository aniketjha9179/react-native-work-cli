import axios from 'axios';

const accessKey = 'oD6AIR9H_2OGICOtNV8N3057JpdBZXSs38oVsnG55ks';

const fetchImages = async (query) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: query,
        per_page: 1000,
        client_id: accessKey,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export default fetchImages;
