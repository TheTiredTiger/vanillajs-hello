/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  let who = ["A genie", "A sorcerer", "Zeus", "My cat", "My grandma"];
  let action = [
    "spirited away",
    "zapped",
    "crushed",
    "exploded",
    "devoured",
    "yeeted",
  ];
  let what = [
    "my spellbook",
    "my dragon",
    "my broom",
    "my dignity",
    "the last cookie in the jar",
    "my one remaining kidney",
    "a little girl's balloon"
  ];
  let when = [
    "before class.",
    "while I was doing the splits.",
    "while I was being arrested.",
    "during therapy.",
    "while I explored Mars.",
    "after our 5'oclock tea."
  ];

  let subject = Math.floor(Math.random() * who.length);
  let verb = Math.floor(Math.random() * action.length);
  let object = Math.floor(Math.random() * what.length);
  let tempClause = Math.floor(Math.random() * when.length);

  return `${who[subject]} ${action[verb]} ${what[object]} ${when[tempClause]}`;
}
