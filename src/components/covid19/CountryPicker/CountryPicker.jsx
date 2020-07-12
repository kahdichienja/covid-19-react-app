import React, { useState, useEffect } from 'react';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { FetchCountries } from '../Api/index'

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchAPI= async () => {
      setFetchedCountries(await FetchCountries())
    }
    fetchAPI()
  },[setFetchedCountries])
  // console.log(fetchedCountries);
  return (
    <div>
      <select className="browser-default custom-select mt-4 mb-4" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Select A Country</option>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        
      </select>
    </div>
  )

}
export default CountryPicker