const API_KEY = "Cdm9wCFqL6E3arOolFwZBVWFcySDicrA";
const API_URL_BASE = "https://api.giphy.com/v1/gifs/search";
const LIMIT = "limit=25";
let query = "cat";
let url = `${API_URL_BASE}?api_key=${API_KEY}&q=${query}&${LIMIT}&offset=0&rating=g&lang=en`;

const getRandomCatURL = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error request by ${url}, status: ${response.status}`);
    }
    const responseJSON = await response.json();
    return responseJSON.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const loadCat = async () => {
  const date = await getRandomCatURL();
  console.log(date);
};

loadCat();

