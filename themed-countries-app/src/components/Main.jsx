import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

// components
import SearchAndFilter from "./SearchAndFilter";
import MainGrid from "./MainGrid";

const Main = (props) => {
  const [countries, setCountries] = useState([]);

  // for country serch form
  const [searchValue, setSearchValue] = useState("");
  const inputChange = (event) => {
    event.persist();
    const newInput = event.target.value;
    setSearchValue(newInput);
  };
  const countrySearch = (event) => {
    event.preventDefault();
    console.log("filter event", event.target);
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchValue}`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.error("Server Error:", err);
      });
  };
  const regionFilter = (event) => {
    event.preventDefault();
  };

  const getCountries = () => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;flag;capital;population;region;numericCode;alpha3Code"
      )
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.error("Server Error:", err);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <SearchAndFilter
        inputChange={inputChange}
        searchValue={searchValue}
        countrySearch={countrySearch}
        regionFilter={regionFilter}
      />
      <MainGrid countries={countries} />
    </>
  );
};

export default withRouter(Main);
