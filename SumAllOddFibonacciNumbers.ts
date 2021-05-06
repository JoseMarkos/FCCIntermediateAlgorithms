const sumAllElements = (arr : number[]) => {
  return arr.reduce((previous, current) =>
    previous + current
  );
}

function getFibs(end : number) : number[] {
  const initialSequence = [1];

  const getSequence = (sequence : number[]) : number[] => {
    const lastElements = sequence.length > 1 ? 
    [sequence[sequence.length - 2], sequence[sequence.length - 1]] : initialSequence;

    const next : number = sumAll(lastElements);
    
    if (next <= end) {
      sequence.push(next);
      return getSequence(sequence);  
    }

    return sequence;
  }

  return getSequence(initialSequence)
}

function sumFibs(num : number) : number {
  const oddFibs = getFibs(num).filter(x => x % 2 !== 0);
  return sumAll(oddFibs);
}
 
console.log(sumFibs(75025));