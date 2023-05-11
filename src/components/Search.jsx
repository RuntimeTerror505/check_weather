import React, { useContext, useState } from "react";
import { WeatherContext } from "../context";
import { Form, Tooltip, Select } from "antd";
import { ReactComponent as Marker } from "../assets/marker.svg";
import axios from "axios";

const Search = () => {
   const {
      fetchForecast,
      state: { location },
   } = useContext(WeatherContext);
   const [options, setOptions] = useState([]);
   const { Option } = Select;

   const handleSearch = (value) => {
      axios
         .get(
            `https://api.weatherapi.com/v1/search.json?key=60a1e58642e34987a6c224405212402&q=${value}`
         )
         .then((res) => setOptions(res.data))
         .catch((err) => console.log(err));
   };

   return (
      <Form
         className="weather__form"
         initialValues={{
            location: location,
         }}
         onFinish={(values) => fetchForecast(values)}
      >
         <Tooltip
            placement="right"
            title={
               "Retrieve the forecast for your destination by searching by city and state (St. Pete, FL) or zip code (5 Digit Numerical)"
            }
         >
            <Form.Item
               name="location"
               className="weather__form-item"
               rules={[
                  {
                     required: true,
                     message: "This field cannot be empty",
                  },
               ]}
            >
               <Select
                  showSearch
                  bordered={false}
                  placeholder="Search by Location"
                  notFoundContent={null}
                  onSearch={(value) => handleSearch(value)}
                  onSelect={(value) => {
                     let selected = options.find(
                        (option) => option.name === value
                     );
                     let coordinates = `${selected.lat}, ${selected.lon}`;
                     fetchForecast(coordinates);
                  }}
                  suffixIcon={<Marker />}
               >
                  {options.length &&
                     options.map((option) => (
                        <Option key={option.id} value={option.name}>
                           {option.name}
                        </Option>
                     ))}
               </Select>
            </Form.Item>
         </Tooltip>
      </Form>
   );
};

export default Search;
