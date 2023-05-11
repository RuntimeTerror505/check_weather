import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

import { actions } from "../state/actions";
import { initialState } from "../state";
import { reducer } from "../state/reducer";

export const WeatherContext = createContext({
   state: undefined,
   dispatch: undefined,
});

const WeatherProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const [farenheit, setFarenheit] = useState(true);
   const [active, setActive] = useState(0);

   const fetchForecast = (coordinates = "27.7676, -82.6403") => {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=60a1e58642e34987a6c224405212402&q=${coordinates}&days=5&aqi=no&alerts=no`;

      axios
         .get(url)
         .then(({ data: { current, forecast, location } }) => {
            dispatch({
               type: actions.setForecast,
               payload: {
                  forecast: forecast.forecastday,
                  current,
                  location: `${location.name}, ${location.region}`,
               },
            });
         })
         .catch((err) => {
            throw new Error(err);
         });
   };

   useEffect(() => {
      fetchForecast();
   }, []);

   return (
      <WeatherContext.Provider
         value={{
            active,
            setActive,
            dispatch,
            farenheit,
            setFarenheit,
            fetchForecast,
            state,
         }}
      >
         {children}
      </WeatherContext.Provider>
   );
};

export default WeatherProvider;
