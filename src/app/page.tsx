let dominoes = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
  [2, 2],
];

// 2. show double numbers
let count = 0;
for (let i = 0; i < dominoes.length; i++) {
  if (dominoes[i][0] === dominoes[i][1]) {
    count++;
  }
}
console.log(count);

// for (let i = 0; i < dominoes.length - 1; i++) {
//   if (
//     dominoes[i][0] + dominoes[i][1] >
//     dominoes[i + 1][0] + dominoes[i + 1][1]
//   ) {
//     let newArrayDominoes = dominoes[i];
//     dominoes = newArrayDominoes;
//   }
// }
// console.log(dominoes);

// 4. remove duplicate

for (let i = 0; i < dominoes.length - 1; i++) {
  let a = dominoes[i][0] + dominoes[i][0];
  let b = dominoes[i + 1][0] + dominoes[i + 1][0];
  console.log(b);
  console.log(a);

  let evenNumbers = dominoes.filter((num) => {
    if (a === b){}
    return 
  });
  console.log(evenNumbers);

  if (a === b) {
    count++;
  }
}

// 5. flip the numbers

// for (let i = 0; i < dominoes.length; i++) {
//   const a = dominoes[i][0];
//   const b = dominoes[i][1];
//   dominoes[i] = [b, a];
// }
// console.log(dominoes);

// let newArray = dominoes.filter((el) => el);

// console.log(newArray);

// console.log(dominoes);

// let descSortedDominoes = dominoes.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
// console.log(descSortedDominoes);

// let ascSortedDominoes = dominoes.sort((b, a) => b[0] + b[1] - (a[0] + a[1]));

// console.log(ascSortedDominoes);

export default function Home() {
  return <h1>{dominoes}</h1>;
}
