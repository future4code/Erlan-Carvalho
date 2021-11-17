import React from "react";
import { HeadersFather, TheHeader } from "../src/styles";

function App() {
  return (
    <div >
      <HeadersFather>
        <TheHeader>
          <input placeholder="first name"></input>
          <input placeholder="last name"></input>
          <input placeholder="participation"></input>
          <button>SEND</button>
        </TheHeader>
      </HeadersFather>
      <div>
        <h1>Body</h1>
        <h2>Data</h2>
        <p>Information of employees participation in business meetings</p>
        <table>
          <th>first name<tr><td>Maria</td></tr> <tr><td>José</td></tr></th>

          <th>last name <tr><td>Dos Santos</td></tr> <tr><td>Freire</td></tr></th>

          <th>participation <tr><td>50%</td></tr> <tr><td> 70%</td></tr></th>
        </table>

      </div>
    </div>
  );
}

export default App;
