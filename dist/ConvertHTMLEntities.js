function convertHTML(str) {
    var htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    var arrStr = str.split('');
    var resoult = arrStr.map(function (x) {
        if (htmlEntities.hasOwnProperty(x)) {
            for (var key in htmlEntities) {
                if (key === x) {
                    return htmlEntities[key];
                }
            }
        }
        return x;
    });
    return resoult.join("");
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
