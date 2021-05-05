const pairs = [["A", "T"], ["C", "G"]];

function findPair(str : string, arr : string[][]) : string[] {
  let result : string[] = [];

  arr.forEach(x => {
    if (x.includes(str)) {
      const strIndex = x.indexOf(str);
      result =  x;
      
      if (strIndex) {
        result = [x[1], x[0]];  
      }
    }
  });

  return result;
}

function pairElement(str : string) {
  let arr = str.split('');
  const result = arr.map(
    x => {
      return findPair(x, pairs);
    }
  );

  return result;
}

console.log(pairElement("GCG"));