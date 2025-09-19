import { Suspense } from 'react';
import './App.css';
import Countries from './components/countries/Countries';

function App() {
  const countriesData = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());
  console.log(countriesData)
  

  return (
    <>
      <Suspense fallback = {<p>Waiting for loading to data..........</p>}>
        <Countries countriesData={countriesData} ></Countries>
      </Suspense>

      <h1>Country Api Loading</h1>
    </>
  );
}

export default App
