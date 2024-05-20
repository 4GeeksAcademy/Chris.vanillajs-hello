/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["The", "Our", "My", "this", "Your"];
  let adj = ["Big", "Creative", "Helpful", "Fast", "Strong"];
  let noun = ["Develpoers", "Engineers", "Analyst", "Project", "Agent"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let div = document.createElement(`div`);
        div.innerText = `
        ${pronoun[i]}${adj[a]}${noun[n]}.com
        ${pronoun[i]}${adj[a]}${noun[n]}.net
        ${pronoun[i]}${adj[a]}${noun[n]}.org
        ${pronoun[i]}${adj[a]}${noun[n]}.edu
        `;
        document.body.appendChild(div);
      }
    }
  }
};
