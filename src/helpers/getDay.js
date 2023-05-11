import { formatDate } from "./formatDate";
import { days } from "../data/days";

export const getDay = (active, forecast) =>
   !active
      ? "Today"
      : days[new Date(formatDate(forecast[active].date)).getDay()];
