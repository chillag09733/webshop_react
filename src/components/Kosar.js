import React from "react";
import "./Kosar.css";

export default function Kosar(props) {
    return (
      <div className="kosar">
        <h3>WHAT'S IN MY CART?</h3>
        <ul>
          {props.kosarLista.map((termek, index) => (
            <li key={index}>
              {termek.cim} - {termek.ar}$ <br />
              <button className="delBtn" onClick={() => props.torles(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

