import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = (props) => {
  const [countryData, setCountryData] = useState([]);
  const [languages, setLanguages] = useState([]);

  const code = props.match.params.alpha3code;

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((res) => {
        setCountryData(res.data);
        setLanguages(res.data.languages.map((lang) => lang["name"]));
      })
      .catch((err) => {
        console.error("Server Error:", err);
      });
  }, []);

  console.log("lang list", languages);
  // countryData.languages.forEach((lang) => console.log(lang.name));

  return (
    <>
      <button onClick={props.history.goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
      {countryData.length === 0 && (
        <Loader
          type="Grid"
          color="hsl(0, 0%, 52%)"
          height={200}
          width={200}
          timeout={10000}
        />
      )}
      <section className="CountryDetailsContainer">
        <img src={countryData.flag} alt={`Flag of ${countryData.name}`} />
        <div className="CountryDataContainer">
          <h2>{countryData.name}</h2>
          <div className="CountryData">
            <div>
              <p>
                <span className="InlineHeading">Native Name: </span>
                {countryData.nativeName}
              </p>
              <p>
                <span className="InlineHeading">Population: </span>
                {countryData.population}
              </p>
              <p>
                <span className="InlineHeading">Region: </span>
                {countryData.region}
              </p>
              <p>
                <span className="InlineHeading">Sub Region: </span>
                {countryData.subregion}
              </p>
              <p>
                <span className="InlineHeading">Capital: </span>
                {countryData.capital}
              </p>
            </div>
            <div>
              <p>
                <span className="InlineHeading">Top Level Domain: </span>
                {countryData.topLevelDomain}
              </p>
              <p>
                <span className="InlineHeading">Region: </span>
                {countryData.region}
              </p>
              <p>
                <span className="InlineHeading">Languages: </span>

                {languages.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(CountryDetail);
