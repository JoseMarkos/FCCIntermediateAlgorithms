function destroyer(arr : number[], ...args : number[]) {
    let solution : number[] = [];

    arr.forEach(x => {
        if (!args.includes(x)) {
            solution.push(x);
        }
    });

    return solution;
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));