interface hey {
  [index: string] : number
}

type hola = hey | number[];

function getCollection(obj:any):any[] {
  let collection:object[] = [];
  
  for (let item of obj) {
    if (typeof item === 'object') {
      if (item.length) {
        collection.push(...getCollection(item));
        continue;
      }

      if (item.length === 0) {
      }
      else {
        collection.push(item);
      }
    }
    else {
      collection.push(item);
    }
  }

  return collection;
}
function steamrollArray(arr: any[]) {
  return [...getCollection(arr)];
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
