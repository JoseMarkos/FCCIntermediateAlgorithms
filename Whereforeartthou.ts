function whatIsInAName(collection: any[], source: any) {
  let arr: any[] = [];

  collection.forEach((x) => {
    for (const key in x) {
      //  console.log(key);
      //  console.log(x[key]);
      }
  });

  arr = collection.filter(x => {
    for (const key in x) {
        for (const sourceKey in source) {
            return key ===  sourceKey && x[key] === source[sourceKey];
            console.log(key ===  sourceKey && x[key] === source[sourceKey]);
            console.log(x[key]);
        }
    }
  });


  // arr = collection.filter(x => x.last === source.last);
  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName([{ first: "Romeo", last: "Montague" }, {
    first: "Mercutio",
    last: null,
  }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }),
);
console.log(
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, {
    "apple": 1,
    "bat": 2,
    "cookie": 2,
  }], { "apple": 1, "bat": 2 }),
);
