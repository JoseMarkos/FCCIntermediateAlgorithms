interface StringArray {
  [index: string]: string;
}

function convertHTML(str: string) {
  const htmlEntities: StringArray = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  let arrStr = str.split("");

  const resoult: string[] = arrStr.map((x) =>
    htmlEntities.hasOwnProperty(x) ? htmlEntities[x] : x
  );

  return resoult.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
