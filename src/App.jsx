import Search from "./components/search/search";
import Forecast from "./components/forecast/Forecast";
import CurrentWeather from "./components/search/current-weather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./axios";
import { useState } from "react";

const style = {
  container: "max-w-[1080px] mx-auto my-5 ",
};

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const ForecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([CurrentWeatherFetch, ForecastWeatherFetch])
      .then(async (response) => {
        const currentweatherresponse = await response[0].json();
        const forecastweatherresponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...currentweatherresponse,
        });
        setForecast({ city: searchData.label, ...forecastweatherresponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(forecast);

  return (
    <div className={style.container}>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
