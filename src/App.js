import "./App.css";
import React, { useState, useEffect } from 'react';
import Cards from "./components/Cards";

const api = `https://api.tvmaze.com/search/shows?q=all`;

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


  return (
   <div>
    <Cards data = {data}/>
   </div>
  );
}

export default App;
