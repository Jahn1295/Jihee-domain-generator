/* eslint-disable */
import "bootstrap";
import "./style.css";

let pro = ["the", "my", "our"];
let adj = ["beautiful", "playful", "funny"];
let noun = ["puppy", "day", "coffee"];
let dot = [".us", ".com", ".net", ".info"];

for (let i = 0; i < pro.length; i++) {
  const a = pro[i];
  for (let j = 0; j < adj.length; j++) {
    const b = adj[j];
    for (let k = 0; k < noun.length; k++) {
      const c = noun[k];
      for (let l = 0; l < dot.length; l++) {
        const d = dot[l];
        console.log(a + b + c + d);
      }
    }
  }
}
