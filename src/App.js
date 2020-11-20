import React, { useEffect, useState } from "react";
import "./App.css";
import navBar from './Components/navbar/navbar'
import header from './Components/header/header'
import mainContent from './Components/mainContent/mainContent'
import slideshow from './Components/slideshow/slideshow'
import footer from './Components/footer/footer'
import axios from "axios"

function App() {
  const [nasaPhoto, setNasaPhoto] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=5EAZTNDqfdPRU0eWuHexKSc6kdNmRbDhGygy43qj&date=2020-11-11`)
    .then( response => console.log(response))
    .catch( err => console.log(err))
  }, [])

  return (
    <div className="App">
     <h1>NASA Photo of The Day</h1>
    </div>
  );
}


export default App;
