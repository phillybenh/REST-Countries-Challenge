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
  const [borders, setBorders] = useState([]);

  const code = props.match.params.alpha3code;

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((res) => {
        setCountryData(res.data);
        setLanguages(res.data.languages.map((lang) => lang["name"]));
        setBorders(res.data.borders);
      })
      .catch((err) => {
        console.error("Server Error:", err);
      });
  }, [code]);

  

  return (
    <>
      <div className="BackBtnContainer">
        <button onClick={props.history.goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
        {/* <Link to={'/'} className="ButtonLink">
        <button>
          <FontAwesomeIcon icon={faHome} />
          Home
        </button>
      </Link> */}
      </div>
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
          <div className="BorderCountries">
            <p>
              <span className="InlineHeading">Border Countries: </span>
              {borders.length === 0 && <span>None</span>}
            </p>
            {borders.map((co) => (
              <Link to={`/country/${co}`} className="ButtonLink">
                <button>{co}</button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(CountryDetail);
