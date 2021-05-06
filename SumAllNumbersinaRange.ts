function sumAll(arr : number[]) : number {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let arrAddends = [];

  for (let index = min; index <= max; index++) {
    arrAddends.push(index);    
  }

  return arrAddends.reduce((previous, current) =>
    previous + current
  );
}

sumAll([1, 4]);

console.log(sumAll([1, 4]));
