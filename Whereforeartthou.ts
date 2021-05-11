interface TheObj {
  [index:string] : ThisContext
}

type ThisContext = string | number | null;

function whatIsInAName(collection: TheObj[], source: TheObj) {
  let arr: TheObj[] = [];
  // Only change code below this line
  collection.forEach(x => {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(x, key)) {
        const sourceElement = source[key];
        if (sourceElement === x[key]) {
          arr.push(x);
        }
      }
    }
  });
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
