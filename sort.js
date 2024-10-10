function sortByLastLetter(words) {
  return words.sort((a, b) => {
    const lastLetterA = a[a.length - 1].toLowerCase();
    const lastLetterB = b[b.length - 1].toLowerCase();

    if (lastLetterA < lastLetterB) {
      return -1;
    }
    if (lastLetterA > lastLetterB) {
      return 1;
    }
    return 0;
  });
}

const names = ["anthony", "wesley", "harold", "debbie", "harper"];

console.log(names);

// // Mutates the original array.
console.log(names.sort());

console.log(names);

// // // Mutates the original array.
console.log(names.reverse());

console.log(names);

// // // Does not mutate the original array
console.log(names.filter((n) => n === "anthony"));

console.log(names);

// // // Mutates the original array.
console.log(sortByLastLetter(names));

console.log(names);
