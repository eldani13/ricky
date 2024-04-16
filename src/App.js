import "./App.css";
import Characters from "./components/Characters";
import { useState } from "react";
import img from "./img/img1.jpg";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    console.log("API: ", api);
    const charactersAPI = await api.json();
    setCharacters(charactersAPI.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters
            characters={characters}
            setCharacters={setCharacters}
            // location={location}
            // episodio={episodio}
          />
        ) : (
          <>
            <img src={img} alt="Rick & Morty" className="img-home" />
            <button onClick={reqAPI} className="btn-search">
              Buscar personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
