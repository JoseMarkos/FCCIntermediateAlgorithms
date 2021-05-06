function diffArray(original: number[], arr: number[]) {
  let filter = arr.filter(x => !original.includes(x));
  return original.concat(filter);
}

function uniteUnique(...args : number[][]) {
  let original : number[] = [];

  for (let index = 0; index < args.length; index++) {
    original = diffArray(original, args[index]);
  }

  return original;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));