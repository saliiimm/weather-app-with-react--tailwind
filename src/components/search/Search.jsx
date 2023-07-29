import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
{
  /*import { url, geoApiOptions } from "../../api";*/
}
import { getCitiesByPrefix } from "../../axios";

const Style = {
  search: "m-3",
};

// eslint-disable-next-line react/prop-types
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = async (inputValue) => {
    const cities = await getCitiesByPrefix(inputValue);
    return {
      options: cities,
    };
  };
  {
    /**   const loadOptions = async (inputValue) => {
    return fetch(
      `${url}?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };*/
  }

  return (
    <>
      <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className={Style.search}
      />
    </>
  );
};

export default Search;
