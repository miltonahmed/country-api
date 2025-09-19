
const Country = ({country}) => {
  console.log(country.languages.languages);
  return (
    <div className="border border-amber-300 rounded-2xl shadow py-3 px-3 flex justify-center items-center flex-col space-y-2.5 capitalize text-center">
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <p>{country.name.official}</p>
      <p>{country.name.common}</p>
      <span>{country.name.region}</span>
      <h2>Population:{country.population.population}</h2>
      <h3>{country.area.area > 30000 ? '(Big Country)' : '(Small Country}'}</h3>
      <p> Region: {country.region.region}</p>
      <p> Capital: {country.capital.capital}</p>
    </div>
  );
}

export default Country