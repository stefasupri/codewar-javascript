// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     return dna.split("T").join("U");
//   }

const DNAtoRNA = (x) => x.split("T").join('U');
console.log(DNAtoRNA("TTTT"));