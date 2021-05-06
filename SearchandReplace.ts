function myReplace(str: string, before: string, after: string) {
  let arr = str.split(" ");
  after = after.toLowerCase();
  let reg = /^[A-Z]/;

  let solution = arr.map((x) => {
    if (x === before) {
      if (reg.test(before)) {
        let arrAfter = after.split("");
        arrAfter[0] = arrAfter[0].toUpperCase();
        return arrAfter.join("");
      }

      return after;
    }

    return x;
  });

  return solution.join(" ");
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"),
);

console.log(
  myReplace("He is Sleeping on the couch", "Sleeping", "testing"),
);
