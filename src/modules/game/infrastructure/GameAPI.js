const API_IMAGES =
  'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';

async function fetchImages() {
  const response = await fetch(API_IMAGES);
  const data = await response.json();
  return data;
}

const GameAPI = { fetchImages };

export default GameAPI;
