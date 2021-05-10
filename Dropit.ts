function dropElements(arr:number[], fun:Function) {
  let start = -1;

  for (let index = 0; index < arr.length; index++) {
    if (fun(arr[index])) {
      start = index;
      break;      
    }
  }

  if (start === -1) {
    return [];
  }

  return arr.slice(start);
}

dropElements([1, 2, 3], function(n:number) {return n < 3; });