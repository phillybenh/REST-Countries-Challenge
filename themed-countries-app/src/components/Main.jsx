import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

// components
import SearchAndFilter from './SearchAndFilter';
import MainGrid from './MainGrid';

const Main = props => {
    const [countries, setCountries] = useState([])
    
    const getCountries = () => {
        axios
            .get("https://restcountries.eu/rest/v2/all?fields=name;flag;capital;population;region;numericCode;alpha3Code")
            .then(res => {
                // console.log('res', res)
                setCountries(res.data);
            })
            .catch(err => {
                console.error("Server Error:", err);
            });
    }
    
    useEffect(() => {
        getCountries();
    }, [])

    return (
        <>
        <h2>Main page</h2>
        <SearchAndFilter />
        <MainGrid countries={countries}/>
        </>
    )
}

export default withRouter(Main);

    // let alpha3code = "MURICA";
    //         <Link to={`/country/${alpha3code}`}>Test LINK</Link>;