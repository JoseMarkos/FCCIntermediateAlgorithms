const reference = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str: string) {
  if (reference === str) {
    return undefined;
  }

  let arrStr = str.split("");
  let current = reference.search(arrStr[0]);
  let result = "";

  arrStr.forEach((x) => {
    const letterIndex = reference.search(x);
    const isNotFirstLetter = current !== letterIndex;
    const isNotTheNextInsequence = current !== letterIndex - 1;
    
    if (
      isNotFirstLetter &&
      isNotTheNextInsequence
    ) {
      result = reference[letterIndex - 1];
    }

    current = letterIndex;
  }); 

  return result;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
