const secondFilter = (myStr: string, arr: string[]): string[] => {
  let resolt:string[] | null = [];
  const regx = /[A-Z][a-z]+/g;
    
  if (myStr.match(/^[A-Z]/)) {
    resolt = myStr.match(regx);
    return resolt ? resolt : [];
  }
  
  let initial = null;

  if (myStr) {
    initial = myStr.match(/[a-z]+/);
    initial = initial ? initial[0] : null;
    resolt  = myStr.match(regx);
  }
  
  if (resolt && initial) {
    resolt = [initial, ...resolt];
  }

  return resolt ? resolt : [];
}

function spinalCase(str: string):string {
  let solution:string[] = [];
  let arr = str.match(/[a-z]+/gi);

  if (arr) {
    console.log('-------------');
    
    if (arr.length === 1) {
      solution = secondFilter(str, arr);
      return solution.join('-').toLocaleLowerCase();
    }

    solution = [...arr];

    solution.forEach(x => {
      const element = x ? x : '';
      const match = x.match(/[A-Z]/g);

      if (match && match.length > 1) {
        if (arr) {
          const filtered = secondFilter(element, arr);
          solution[solution.indexOf(element)] = filtered.join('-').toLocaleLowerCase();
        }
      }
    });
  }
 
  if (solution) {
    return solution.join('-').toLocaleLowerCase();
  }

  return '';
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));