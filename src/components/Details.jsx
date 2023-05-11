import React, { useContext } from "react";
import { WeatherContext } from "../context";

import { ImDroplet } from "react-icons/im";
import { CgThermostat } from "react-icons/cg";
import { GiSunglasses } from "react-icons/gi";
import {
   TiWeatherDownpour,
   TiWeatherWindyCloudy,
   TiWeatherSnow,
} from "react-icons/ti";

const Details = () => {
   const {
      active,
      farenheit,
      state: { current, forecast },
   } = useContext(WeatherContext);
   console.log(current, farenheit);

   const feelsLike = active
      ? "N/A"
      : current && farenheit
      ? current.feelslike_f
      : current.feelslike_c;
   console.log(feelsLike);

   return (
      <section className="weather__details">
         <section className="weather__detail">
            <CgThermostat className="weather__details-icon" />
            <section className="weather__details-item">
               <span className="weather__details-label">Feels Like</span>
               <span>{feelsLike}°</span>
            </section>
         </section>
         <section className="weather__detail">
            <TiWeatherDownpour className="weather__details-icon" />
            <section className="weather__details-item">
               <span className="weather__details-label">Chance of Rain</span>
               <span>{forecast[active].day.daily_chance_of_rain}%</span>
            </section>
         </section>
         <section className="weather__detail">
            <ImDroplet className="weather__details-icon" />
            <section className="weather__details-item">
               <span className="weather__details-label">Humidity</span>
               <span>{forecast[active].day.avghumidity}%</span>
            </section>
         </section>
         <section className="weather__detail">
            <TiWeatherWindyCloudy className="weather__details-icon" />
            <section className="weather__details-item">
               <span className="weather__details-label">Wind (mph)</span>
               <span>{forecast[active].day.maxwind_mph}</span>
            </section>
         </section>
         <section className="weather__detail">
            <GiSunglasses className="weather__details-icon" />
            <section className="weather__details-item">
               <span className="weather__details-label">UV</span>
               <span>{forecast[active].day.uv}</span>
            </section>
         </section>
         <section className="weather__detail">
            <TiWeatherSnow className="weather__details-icon" />
            <section className="weather__details-item">
               <span className="weather__details-label">Chance of Snow</span>
               <span>{forecast[active].day.daily_chance_of_snow}%</span>
            </section>
         </section>
      </section>
   );
};

export default Details;
