import React, { useContext } from "react";
import { WeatherContext } from "../context";

import Card from "./Card";

const Forecast = () => {
   const { state } = useContext(WeatherContext);

   return (
      <section className="weather__forecast">
         {state.forecast
            .filter((_daily, index) => index < 3)
            .map((daily, index) => (
               <Card key={index} {...state} {...daily} index={index} />
            ))}
      </section>
   );
};

export default Forecast;
