/* eslint-disable react/prop-types */
const style = {
  weather:
    "w-72 rounded-md shadow-2xl text-white bg-[#333] mx-auto mt-5 pb-5 px-5",
  top: "flex justify-between items-center",
  city: "font-semibold text-lg m-0 tracking-tight",
  weatherDescription: "font-normal text-md m-0",
  icon: "w-24",
  bottom: "flex justify-between items-center",
  temperature: "font-semibold text-5xl w-auto my-2.5 mx-0 tracking-tighter",
  details: "w-full pl-5 ",
  paramaterRow: "flex justify-between",
  paramaterLabel: "text-left font-normal text-xs",
  paramaterLabelTop: "text-left font-normal text-m text-orange-400 ",
  paramaterValue: "text-right font-semibold text-xs",
};
const CurrentWeather = ({ data }) => {
  return (
    <div className={style.weather}>
      <div className={style.top}>
        <div>
          <p className={style.city}>{data.city}</p>
          <p className={style.weatherDescription}>
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`/src/assets/${data.weather[0].icon}.png`}
          alt="weather"
          className={style.icon}
        />
      </div>
      <div className={style.bottom}>
        <p className={style.temperature}>{Math.round(data.main.temp)}ºC</p>
        <div className={style.details}>
          <div className={style.paramaterRow}>
            <span className={style.paramaterLabelTop}>Details:</span>
          </div>
          <div className={style.paramaterRow}>
            <span className={style.paramaterLabel}>Feels like</span>
            <span className={style.paramaterValue}>
              {Math.round(data.main.feels_like)}ºC
            </span>
          </div>
          <div className={style.paramaterRow}>
            <span className={style.paramaterLabel}>Wind</span>
            <span className={style.paramaterValue}>{data.wind.speed}m/s</span>
          </div>
          <div className={style.paramaterRow}>
            <span className={style.paramaterLabel}>Humidity</span>
            <span className={style.paramaterValue}>{data.main.humidity}%</span>
          </div>
          <div className={style.paramaterRow}>
            <span className={style.paramaterLabel}>Pressure</span>
            <span className={style.paramaterValue}>
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
