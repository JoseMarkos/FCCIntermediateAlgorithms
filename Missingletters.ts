const reference = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str: string) {
  if (reference === str) {
    return undefined;
  }

  let arrStr = str.split("");
  let current = reference.search(arrStr[0]);
  let result = "";

  let test = arrStr
    .forEach((x) => {
      let letterIndex = reference.search(x);

      if (current != letterIndex && current !== letterIndex - 1) {
        result = reference[letterIndex - 1];
      }

      current = letterIndex;
    });

  return result;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
