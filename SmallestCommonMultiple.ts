const getSixBasedNumersOne = (n: number): number => 6 * n - 1;

const getSixBasedNumersTwo = (n: number): number => 6 * n + 1;

const getFirstCollection = (max: number) => {
  if (max == 2) {
    return [max];
  }

  if (max == 3 || max == 4) {
    return [2, 3];
  }

  let collection = [2, 3];

  for (let index = 1; collection[collection.length - 1] < max; index++) {
    let nextPrime = getSixBasedNumersOne(index);

    if (nextPrime > max) {
      break;
    }

    collection.push(nextPrime);
    
    if (collection[collection.length - 1] < max) {
      nextPrime = getSixBasedNumersTwo(index);

      if (nextPrime > max) {
        break;
      }

      collection.push(nextPrime);
    }
  }

  return collection;
}

const getBooleansCollection = (collection: number[]): boolean[] => Array.from(collection, x => true);

const getPrimes = (max: number) => {
  const firstCollection = getFirstCollection(max);
  const booleanCollection = getBooleansCollection(firstCollection);
  
  const getNextFilterCollection = (collection: number[], start: number): void => {
    const nextPrime = collection[start];
    let index = 1;
    let indexTwo = 1;
    let item = 6 * index * nextPrime - nextPrime;
    let itemTwo = 6 * index * nextPrime + nextPrime;
  
    while(collection.includes(item)) {
      booleanCollection[collection.indexOf(item)] = false;
      index++;
      item = 6 * index * nextPrime - nextPrime;
    }

    while(collection.includes(itemTwo)) {
      booleanCollection[collection.indexOf(itemTwo)] = false;
      indexTwo++;
      itemTwo = 6 * indexTwo * nextPrime + nextPrime;
    }
  }

  firstCollection.forEach(x => {
    if(booleanCollection[firstCollection.indexOf(x)]) {
      getNextFilterCollection(firstCollection, firstCollection.indexOf(x));
    }
  });
  
  return firstCollection.filter(x => booleanCollection[firstCollection.indexOf(x)] === true);
}

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

const getFirstFactor = (n: number, collection: number[]):number => {
  if (isPrime(n, collection)) {
    return n;
  }

  let factor:number = 1;

  for (let index = 0; index < collection.length; index++) {
    if (n % collection[index] === 0) {
      factor = collection[index];
      break;
    }
  }
  return factor;
}

const isPrime = (n: number, collection:number[]): boolean => collection.includes(n);

const getFactorsObjet = (n: number, collection: number[]):NumberArray => {
  const obj: NumberArray  = getANumberArray();

  if (isPrime(n, collection)) {
    obj[n] = 1;
    return obj;
  }

  const firstFactor:number = getFirstFactor(n, collection);
  const divided:number     = n / firstFactor;

  obj[firstFactor]++;

  if (divided !== 1) {
    const nextObj = getFactorsObjet(divided, collection);

    for (const key in nextObj) {
      if (obj[key] === undefined) {
        obj[key] = nextObj[key];
        continue;
      }

      obj[key] += nextObj[key];
    }
  }

  return obj;
};

const getLCMCollection = (arr: NumberArray[]):number[] => {
  const obj: NumberArray        = getANumberArray();
  let collection: number[]      = [];

  arr.forEach((x: NumberArray) => {
    for (const key in x) {
      if (obj[key] === undefined) {
        obj[key] = x[key];
        break;
      }

      const max = Math.max(obj[key], x[key]);
      obj[key]  = max;
    }
  });
  
  for (const key in obj) {
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
  const primes    = getPrimes(max);

  let current: number           = genItems.next().value;
  let collection: NumberArray[] = [];
  let factors: number[]         = [];

  while (current <= max) {
    if (current != 1) {
      collection.push(getFactorsObjet(current, primes));
    }

    current = genItems.next().value;
  }

  factors = getLCMCollection(collection);

  return factors.reduce((a, c) => a * c);
}

console.log(smallestCommons([1, 13]));