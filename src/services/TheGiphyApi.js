const API_KEY = "Cdm9wCFqL6E3arOolFwZBVWFcySDicrA";
const API_URL_BASE = "https://api.giphy.com/v1/gifs/search";
const LIMIT = "limit=25";


export const getSearchedGIF = async (query) => {
  const queryURL = `${API_URL_BASE}?api_key=${API_KEY}&q=${query}&${LIMIT}&offset=0&rating=g&lang=en`;

  try {
    const response = await fetch(queryURL);
    if (!response.ok) {
      throw new Error(`Error request by ${queryURL}, status: ${response.status}`);
    }
    const responseJSON = await response.json();
    return responseJSON.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const loadCat = async () => {
  const date = await getSearchedGIF();
  console.log(date);
};

loadCat();

