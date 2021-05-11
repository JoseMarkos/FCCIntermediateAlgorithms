interface AverageAltitud {
  name: string,
  avgAlt: number
}

interface OrbitalPeriod {
  name: string,
  orbitalPeriod: number
}

function orbitalPeriod(arr:AverageAltitud[]):OrbitalPeriod[] {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let collection:OrbitalPeriod[] = [];

  arr.forEach(x => {
    const a     = earthRadius + x.avgAlt;
    const time  = 2 * Math.PI * Math.sqrt((Math.pow(a, 3) / GM));
    collection.push({name: x.name, orbitalPeriod: Math.round(time)});
  });

  return collection;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
