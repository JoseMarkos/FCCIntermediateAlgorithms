
interface HtmlEntitiesI  {
  "&": string,
  "<": string,
  ">": string,
  '"': string,
  "'": string
}

function convertHTML(str : string) {

  const htmlEntities : HtmlEntitiesI = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  console.log(typeof htmlEntities);

  let arrStr = [...str];

  const resoult : string[]  = arrStr.map((x : string) => 
  {
    if (htmlEntities.hasOwnProperty(x)) {
      for (const key in htmlEntities) {
        if (key === x) {
          console.log(key);
          return htmlEntities.key;
        }
      }  
    }

    return x;
    });

  console.log(resoult);


  return str.match(/[&<>"']/g);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));