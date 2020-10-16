import React from "react";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

// components
import CountryCard from './CountryCard';

const MainGrid = (props) => {
//   console.log(props);
  const countries = props.countries;
//   console.log('props.countries', countries);
  return (
    <section className="MainGrid">
      {countries.length === 0 && (
        <Loader
          type="Grid"
          color="hsl(0, 0%, 52%)"
          height={200}
          width={200}
          timeout={10000}
        />
      )}
      {countries.map(country => (
          <CountryCard key={country.numericCode} country={country} />
      ))}
    </section>
  );
};

export default withRouter(MainGrid);
