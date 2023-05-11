import React, { useContext } from "react";
import { WeatherContext } from "../context";
import { formatDate } from "../helpers/formatDate";
import { days } from "../data/days";

const Card = ({ index, day, date }) => {
   const { active, farenheit, setActive } = useContext(WeatherContext);
   return (
      <section
         onClick={() => setActive(index)}
         className={`weather__card ${
            active === index ? "weather__card--active" : ""
         }`}
      >
         <img
            className="weather__card-icon"
            src={day.condition.icon}
            alt=""
            role="presentation"
         />
         <span className="weather__card-text">
            {days[new Date(formatDate(date)).getDay()]}
         </span>
         <span className="weather__card-text weather__card-text--avg">
            {farenheit ? day.avgtemp_f : day.avgtemp_c}
            <span className="weather__card-degree">°</span>
         </span>
         <section className="weather__card-details">
            <span className="weather__card-text weather__card-text--min">
               {farenheit ? day.mintemp_f : day.mintemp_c}°
            </span>
            <span className="weather__card-text weather__card-text--max">
               {farenheit ? day.maxtemp_f : day.maxtemp_c}°
            </span>
         </section>
      </section>
   );
};

export default Card;
