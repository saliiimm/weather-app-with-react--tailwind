/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const style = {
  titleDiv: "m-5",
  item: "m-3",
  title: "text-xl font-bold",
  dailyItem:
    "bg-slate-100 rounded-md h-10 m-1.5 flex items-center cursor-pointer text-l px-5 py-0.5  ",
  iconSmall: "w-10",
  day: "cursor-pointer text-gray-800 flex-1 font-bold ml-4",
  description: "cursor-pointer flex-1 mr-4 text-right",
  minmax: "text-gray-600",
  dailyDetailsGrid: "flex-1 px-4 py-0.5 grid grid-cols-auto gap-y-0 gap-x-3.5",
  dailyDetailsGridItem: "flex items-center justify-between h-8",
  label1: "text-gray-500",
  label2: "text-gray-800",
};

const Forecast = ({ data }) => {
  const Today = new Date().getDay();

  const forecatDays = DAYS.slice(Today, DAYS.length).concat(
    DAYS.slice(0, Today)
  );

  return (
    <>
      <div className={style.titleDiv}>
        <label className={style.title}>Daily label</label>
      </div>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx} className={style.item}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={style.dailyItem}>
                  <img
                    src={`/src/assets/${item.weather[0].icon}.png`}
                    alt="weather"
                    className={style.iconSmall}
                  />
                  <label className={style.day}>{forecatDays[idx]}</label>
                  <label className={style.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={style.minmax}>
                    {Math.round(item.main.temp_min)}ºC /
                    {Math.round(item.main.temp_max)}ºC
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={style.dailyDetailsGrid}>
                <div className={style.dailyDetailsGridItem}>
                  <label>Pressure:</label>
                  <label> {item.main.pressure} hPa</label>
                </div>
                <div className={style.dailyDetailsGridItem}>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={style.dailyDetailsGridItem}>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={style.dailyDetailsGridItem}>
                  <label>Wind speed:</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className={style.dailyDetailsGridItem}>
                  <label>Sea level:</label>
                  <label>{item.main.sea_level} m </label>
                </div>
                <div className={style.dailyDetailsGridItem}>
                  <label>Feels like:</label>
                  <label> {Math.round(item.main.feels_like)}ºC</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
