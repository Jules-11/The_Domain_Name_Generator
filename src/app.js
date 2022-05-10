/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let divDom = document.getElementById("domains");
  let domain = "";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["internet", "sergio", "lastofus"];
  let com = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < com.length; l++) {
          let extWithoutTheDot = com[l].slice(1);
          if (noun[k].slice(-extWithoutTheDot.length) == extWithoutTheDot) {
            domain =
              pronoun[i] +
              adj[j] +
              noun[k].slice(0, noun[k].length - extWithoutTheDot.length) +
              "<span class='text-danger'>" +
              com[l] +
              "</span>";
          } else {
            domain =
              pronoun[i] +
              adj[j] +
              noun[k] +
              "<span class='text-secondary'>" +
              com[l] +
              "</span>";
          }
          let divCol = document.createElement("div");
          divCol.classList.add("col-12");
          divCol.classList.add("col-sm-4");
          divDom.appendChild(divCol).innerHTML = domain;
        }
      }
    }
  }
};
