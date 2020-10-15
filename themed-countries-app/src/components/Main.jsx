import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

const Main = props => {
    let alpha3code = 'MURICA';

    return (
        <>
        <h2>Main page</h2>
        <Link to={`/country/${alpha3code}`}>LINK</Link>
        </>
    )
}

export default withRouter(Main);