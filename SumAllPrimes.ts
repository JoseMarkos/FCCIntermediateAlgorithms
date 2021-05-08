function sumPrimes(num: number) {
  let result : number[] = [];

  const items = function*() {
    let n = 0;
    while (true) {
      yield n++;
    }
  }

  const getFactorial = (n : number) : number => {
    const itemsGenerator : Generator = items();
    let current = itemsGenerator.next().value;
    let factorial = 1;

    while(current < n) {
      current = itemsGenerator.next().value;
      factorial *= current;
    }

    return factorial;
  };

  console.log(getFactorial(4 - 1) + " el current");

  const primes = function*() {
    let n = 3;
    while (true) {
      n += 2;
      if((n + 2) % n !== 0) {
        console.log(27 % 25 + " n");
        yield n;
      }
    }
  }

  const ssprimes = function*() {
    yield 2;
    yield* genPrimes;
  }

  const genPrimes : Generator = primes();

  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  console.log(genPrimes.next());
  
  const isPrime = (n: number) : boolean => {
    if (n === 1) {
      return false;
    }

    if (n === 2) {
      return true;
    }
    
    if (n > 2 && n % 2 === 0) {
      return false;
    }

    const maxDivisor = Math.floor(Math.sqrt(n));

    
    return true;
  }

  return result;
}

console.log(sumPrimes(10));