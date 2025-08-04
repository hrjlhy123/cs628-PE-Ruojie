// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CitiesLayout from './components/CitiesLayout'
import CitiesList from './components/CitiesList'
import CityDetails from './components/CityDetails'
import AddCity from './components/AddCity'
import './App.css'

const App = () => {
  const [cities, setCities] = useState([
    { id: `1`, name: `New York`, country: `USA`, population: 841900, description: `The Big Apple` },
    { id: `2`, name: `Tokyo`, country: `Japan`, population: 13929000, description: `The heart of Japan` },
  ])

  console.log("App rendered!", cities);

  const addCity = (city) => {
    setCities(prev => [...prev, { ...city, id: Date.now().toString() }])
  }

  return (
    <div className="app-container">
      <Routes>
        <Route path="cities" element={<CitiesLayout />}>
          <Route index element={<CitiesList cities={cities} />} />
          <Route path="add" element={<AddCity onAdd={addCity} />} />
          <Route path=":id" element={<CityDetails cities={cities} />} />
        </Route>
        <Route index element={<Navigate to="cities" replace />} />
        <Route path="*" element={<Navigate to="cities" replace />} />
      </Routes>
    </div>
  )
}

export default App