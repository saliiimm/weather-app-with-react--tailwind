import axios from "axios";

export const options = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000",
  headers: {
    "X-RapidAPI-Key": "8ea5139962msh1afe708f303ae19p154b89jsn684f9c29df9f",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const getCitiesByPrefix = async (prefix) => {
  try {
    const response = await axios.request({
      ...options,
      params: {
        namePrefix: prefix,
      },
    });

    return response.data.data.map((city) => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getCitiesByPrefix };

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "1d06ca14601b291fc73c3b9398a77a14";
