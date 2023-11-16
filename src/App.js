import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./NavBar";

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  useEffect(() => {
    async function loadDogs(){
      const response = await axios.get("http://localhost:3000/dogs")
      setDogs({
        data: response.data,
        isLoading: false
      })
    }
    loadDogs()
  }, [])

  //original localhost: 5001
  //cra localhost: 3000 and 3001
  //react-vite localhost: 5173

  if (dogs.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className="container">
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
