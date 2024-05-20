let determiner = ["the", "our", "this", "that"];
let adj = [
  "great",
  "big",
  "marvelous",
  "first",
  "last",
  "incredible",
  "blooming",
  "suspicious",
  "inconspicuous"
];
let noun = ["jogger", "racoon", "wizard", "beluga", "ostrich", "dentist"];
let extension = [".com", ".net", ".io", ".pt", ".co.uk"];

function domainGenerator(arr1, arr2, arr3, arr4) {
  let domains = [];

  for (let a = 0; a < arr1.length; a++) {
    for (let b = 0; b < arr2.length; b++) {
      for (let c = 0; c < arr3.length; c++) {
        for (let d = 0; d < arr4.length; d++) {
          domains.push(arr1[a] + arr2[b] + arr3[c] + arr4[d]);
        }
      }
    }
  }
  console.log(domains);
}

domainGenerator(determiner, adj, noun, extension);
