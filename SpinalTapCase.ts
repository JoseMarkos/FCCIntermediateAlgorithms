const secondFilter = (myStr: string, arr: string[]): string[] => {
  let resolt:string[] | null = [];
  const CapitalInitialWordregx = /[A-Z][a-z]+/g;
    
  if (myStr.match(/^[A-Z]/)) {
    resolt = myStr.match(CapitalInitialWordregx);
    return resolt ? resolt : [];
  }
  
  const match = myStr.match(/[a-z]+/);

  if (match) {
    let initial             = match[0];
    let CapitalInitialWordsArray = myStr.match(CapitalInitialWordregx);

    if (CapitalInitialWordsArray) {
      resolt = [initial, ...CapitalInitialWordsArray];
    }
  }

  return resolt;
}

function spinalCase(str: string):string {
  let solution:string[] = [];
  let match = str.match(/[a-z]+/gi);

  if (match) {
    let arr = [...match];

    if (arr.length === 1) {
      solution = secondFilter(str, arr);
      return solution.join('-').toLocaleLowerCase();
    }

    solution = [...arr];

    arr.forEach(x => {
      const match = x.match(/[A-Z]/g);
      if (match && match.length > 1) {
        const filtered = secondFilter(x, arr);
        solution[arr.indexOf(x)] = filtered.join('-').toLocaleLowerCase();
      }
    });
  }
 
  return solution.join('-').toLocaleLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));