import React from "react";
import { Link, withRouter } from "react-router-dom";

const CountryCard = (props) => {
  const {
    alpha3Code,
    capital,
    flag,
    name,
    population,
    region,
  } = props.country;
  return (
    <Link to={`/country/${alpha3Code}`} className="TextLink">
      <section className="CountryCard">
        <>
          <img src={flag} alt={`Flag of ${name}`} />
          <h2>{name}</h2>
          <p>
            <span className="InlineHeading">Population: </span>
            {population}
          </p>
          <p>
            <span className="InlineHeading">Region: </span>
            {region}
          </p>
          <p>
            <span className="InlineHeading">Capital: </span>
            {capital}
          </p>
        </>
      </section>
    </Link>
  );
};

export default withRouter(CountryCard);
