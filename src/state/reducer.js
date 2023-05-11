import { actions } from "../state/actions";

export const reducer = (state, action) => {
   switch (action.type) {
      case actions.setForecast:
         const {
            payload: { forecast, current, location },
         } = action;

         return {
            ...state,
            forecast,
            current,
            location,
            loaded: true,
         };
      default:
         return {
            ...state,
         };
   }
};
