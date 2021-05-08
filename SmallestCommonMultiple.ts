const items = function* (initial: number) {
  let n = initial;
  while (true) {
    yield n++;
  }
};

interface NumberArray {
  [index: string]: number;
}

const getANumberArray = ():NumberArray => {
  return {
    "2": 0,
    "3": 0,
    "5": 0,
    "7": 0,
  }
}

const isFactorOfTwo = (n: number): boolean => n % 2 === 0;

const isFactorOfThree = (n: number): boolean => n % 3 === 0;

const isFactorOfFive = (n: number): boolean => n % 5 === 0;

const isOnOfTheExeptions = (n: number): boolean =>
  n === 2 || n === 3 || n === 5 || n === 7;

const getFirstFactor = (n: number) => {
  if (isFactorOfTwo(n)) {
    return 2;
  }

  if (isFactorOfThree(n)) {
    return 3;
  }

  if (isFactorOfFive(n)) {
    return 5;
  }

  return 7;
}

const getFactorsObjet = (n: number): NumberArray => {
  const obj: NumberArray = getANumberArray();

  if (isOnOfTheExeptions(n)) {
    obj[n] = 1;
    return obj;
  }

  const firstFactor = getFirstFactor(n);
  const divided     = n / firstFactor;

  obj[firstFactor]++;

  if (divided !== 1) {
    const nextObj = getFactorsObjet(divided);
    
    obj["2"] += nextObj["2"];
    obj["3"] += nextObj["3"];
    obj["5"] += nextObj["5"];
    obj["7"] += nextObj["7"];
  }

  return obj;
};

const getLCMCollection = (arr: NumberArray[]): number[] => {
  const obj: NumberArray        = getANumberArray();
  let collection: number[]      = [];

  arr.forEach((x: NumberArray) => {
    for (const key in x) {
      const max = Math.max(obj[key], x[key]);
      obj[key]  = max;
    }
  });
  
  for (const key in obj) {
    console.log(`${key} ${obj[key]}`);
    let current = 1;

    while(obj[key] >= current) {
      collection.push(Number(key));
      current++
    }
  }

  return collection;
};

function smallestCommons(arr: number[]): number {
  const max       = Math.max(...arr);
  const min       = Math.min(...arr);
  const genItems  = items(min);

  let current: number           = genItems.next().value;
  let collection: NumberArray[] = [];
  let factors: number[]         = [];

  while (current <= max) {
    if (current != 1) {
      collection.push(getFactorsObjet(current));
    }

    current = genItems.next().value;
  }

  factors = getLCMCollection(collection);

  return factors.reduce((a, c) => a * c);
}

console.log(smallestCommons([1, 13]));