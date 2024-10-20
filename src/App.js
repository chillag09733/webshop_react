import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import Termekek from "./components/Termekek";
import Kosar from "./components/Kosar";

function App() {
 const [kosarLista, setKosarLista] = useState([]);
  const termekLista = [
    {
      cim: "Final Girls",
      mufaj: "Thriller",
      ar: 9.5,
      kep: "/pics/final_girls.png",
    },
    {
      cim: "The Last Time I Lied",
      mufaj: "Psychological Thriller",
      ar: 10,
      kep: "/pics/last_time_i_lied.png",
    },
    {
      cim: "Lock Every Door",
      mufaj: "Mystery Thriller",
      ar: 9.75,
      kep: "/pics/lock_every_door.png",
    },
    {
      cim: "Home Before Dark",
      mufaj: "Horror",
      ar: 10.2,
      kep: "/pics/home_before_dark.png",
    },
    {
      cim: "Survive the Night",
      mufaj: "Suspense Thriller",
      ar: 8,
      kep: "/pics/survive_the_night.png",
    },
  ];

  function katt(adat){
    console.log("app", adat)
    const kiválasztottTermek = termekLista[adat];
    setKosarLista([...kosarLista, kiválasztottTermek]);
  }
  
  function torles(index) {
    const ujKosarLista = [...kosarLista];
    ujKosarLista.splice(index, 1);
    setKosarLista(ujKosarLista);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOKSHOP</h1>
      </header>
      <article>
        <div className="termekek">
          <Termekek termekLista={termekLista} katt={katt} />
        </div>
        <div className="kosar">
          <Kosar kosarLista={kosarLista} torles = {torles} />
        </div>
      </article>
      <footer>Massányi Csilla</footer>
    </div>
  );
}

export default App;
