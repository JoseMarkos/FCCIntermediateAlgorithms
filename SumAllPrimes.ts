const getSixBasedNumersOne = (n: number) : number => 6 * n - 1;

const getSixBasedNumersTwo = (n: number) : number => 6 * n + 1;

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

function sumPrimes(num: number) {
 getPrimes(num).reduce((a, c) => a + c);
}

sumPrimes(10);
sumPrimes(71);