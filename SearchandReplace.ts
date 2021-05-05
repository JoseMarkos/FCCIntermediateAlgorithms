function myReplace(str: string, before: string, after: string) {
  let arr = str.split(' ');
  after =  after.toLowerCase();
  
  let solution =  arr.map(x => {
    let reg = /^[A-Z]/;

    if (x === before) {
      if (reg.test(before)) {
        let arr =  after.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
      }

      return after;
    }

    return x;
  });

  return solution.join(' ');
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

console.log(
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
);
