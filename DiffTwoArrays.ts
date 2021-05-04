function diffArray(arr1: any[], arr2: any[]) {
  const firstDiff = arr1.filter((x) => !arr2.includes(x));
  const secondDiff = arr2.filter((x) => !arr1.includes(x));
  return firstDiff.concat(secondDiff);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(diffArray([1, 2, , 33,3, 5], [1, 2, 3, 4, 5]));
