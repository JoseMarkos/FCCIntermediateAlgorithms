function convertHTML(str) {
    var htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    var arrStr = str.split("");
    var resoult = arrStr.map(function (x) {
        return htmlEntities.hasOwnProperty(x) ? htmlEntities[x] : x;
    });
    return resoult.join("");
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
