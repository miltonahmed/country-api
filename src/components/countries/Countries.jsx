import { use } from "react";

const Countries = ({ countriesData }) => {
  const countriesApi= use(countriesData)
  const countries = countriesApi.countries
  console.log(countries)
  return (
    <div>
    <h1>Countries : {countries.length}</h1>

    </div>
  )
};

export default Countries