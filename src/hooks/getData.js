import axios from "axios";

export const fetchData = () => {
  const PEXELS_API_KEY = "jG95Ht3Ndp5eVKpQvoXbHpPVPG9GHFV6ULDxfLzrK4Rz598ncGvBYkK1";
  const PEXELS_API_URL = `https://api.pexels.com/v1/curated?per_page=20`;

  return axios.get(PEXELS_API_URL, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  });
};
