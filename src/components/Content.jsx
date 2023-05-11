import React, { useContext } from "react";
import { WeatherContext } from "../context";
import { Switch, Spin } from "antd";

import Current from "./Current";
import Details from "./Details";
import Forecast from "./Forecast";

const Content = () => {
   const {
      active,
      farenheit,
      setFarenheit,
      state: { current, forecast, loaded },
   } = useContext(WeatherContext);

   return (
      <main
         className={`weather__content ${
            !loaded ? "weather__content--loading" : ""
         }`}
      >
         {loaded ? (
            <>
               <Current />
               <section className="weather__container">
                  <Switch
                     defaultChecked
                     checkedChildren="F°"
                     unCheckedChildren="C°"
                     onChange={() => setFarenheit(!farenheit)}
                  />
                  <Details
                     current={current}
                     farenheit={farenheit}
                     forecast={forecast}
                     active={active}
                  />
               </section>
               <Forecast />
            </>
         ) : (
            <Spin size="large" />
         )}
      </main>
   );
};

export default Content;
