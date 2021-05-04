function destroyer(arr : Number[], ...args : number[]) {
    let solution : number[] = [];
  //  console.log( typeof args + ' hao' );
    console.log( typeof arr + ' hao' );
    ///console.log( typeof [1,23] + ' hao' );

 /*    args.forEach(x => {
        if (typeof x === "number") {
            if (!arr.includes(x)) {
                solution.push(x);
            }
        }
    }); */

    return solution;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));