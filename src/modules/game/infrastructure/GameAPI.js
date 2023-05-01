const API_IMAGES =
  'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';

async function fetchImages() {
  try {
    const response = await fetch(API_IMAGES);

    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Return an empty object or any other fallback data
    return {};
  }
}

const GameAPI = { fetchImages };

export default GameAPI;
