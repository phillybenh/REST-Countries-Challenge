import React from 'react';
import { withRouter } from 'react-router-dom';

const CountryDetail = props => {
console.log(props.history.goBack);
    return (
      <>
        <h2>Country Detail Page</h2>
        <button onClick={props.history.goBack}>Go Back</button>
      </>
    );
}

export default withRouter(CountryDetail);