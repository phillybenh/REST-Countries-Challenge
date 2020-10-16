import React from "react";
import { withRouter } from "react-router-dom";

const SearchAndFilter = (props) => {
console.log("S&F", props)

  return (
    <section className="FormContainer" onSubmit={props.countrySearch}>
      <form>
        <input
          id="country"
          type="search"
          name="country"
          value={props.searchValue}
          placeholder={"Search for a country..."}
          onChange={props.inputChange}
        />
      </form>
      <form>
        <select id="region" name="region" onChange={props.regionFilter}>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </section>
  );
};

export default withRouter(SearchAndFilter);
