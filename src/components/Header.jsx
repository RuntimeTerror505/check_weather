import React, { useContext } from "react";
import { WeatherContext } from "../context";
import { formatDate } from "../helpers/formatDate";
import { getDay } from "../helpers/getDay";

import Search from "./Search";

const Header = () => {
   const {
      active,
      state: { current, forecast, loaded },
   } = useContext(WeatherContext);

   let currentDay;
   let formattedDate;
   let icon;

   if (loaded) {
      currentDay = getDay();
      formattedDate = formatDate(forecast[active].date);
      icon = current.condition.icon;
   }

   return (
      <header className="weather__header">
         <section className="weather__header-details">
            <img
               src={icon}
               className="weather__header-icon"
               alt=""
               role="presentation"
            />
            <section className="weather__header-stamp">
               <span className="weather__header-today">{currentDay}</span>
               <span className="weather__header-date">{formattedDate}</span>
            </section>
         </section>
         {loaded && <Search />}
      </header>
   );
};

export default Header;
