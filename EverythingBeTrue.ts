interface StringObj  {
  [index:string] : string
}
function truthCheck(collection:StringObj[], pre:string):boolean {
  let result = true;
  
  for (const iterator of collection) {
    console.log(iterator[pre]);
    if (!iterator[pre]) {
      result = false;
      break;
    }
  }
  
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single") );
