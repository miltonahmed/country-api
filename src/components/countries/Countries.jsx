import { use } from 'react';
import Country from '../country/Country';

const Countries = ({ countriesData }) => {
  const countriesApi = use(countriesData);
  const countries = countriesApi.countries;

  return (
    <div>
      <h1 className='text-4xl text-black font-bold text-center uppercase mb-3 '>In The Countries : {countries.length}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-xl sm:text-2xl text-black capitalize'>
        {countries.map(country => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
