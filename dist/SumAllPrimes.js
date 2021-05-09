var getSixBasedNumersOne = function (n) {
    var multi = 6 * n;
    return multi - 1;
};
var getSixBasedNumersTwo = function (n) {
    var multi = 6 * n;
    return multi + 1;
};
var getFirstCollection = function (max) {
    if (max == 2) {
        return [max];
    }
    if (max == 3 || max == 4) {
        return [2, max];
    }
    var collection = [2, 3];
    for (var index = 1; collection[collection.length - 1] < max; index++) {
        var nextPrime = getSixBasedNumersOne(index);
        if (nextPrime > max) {
            break;
        }
        collection.push(nextPrime);
        if (collection[collection.length - 1] < max) {
            nextPrime = getSixBasedNumersTwo(index);
            if (nextPrime > max) {
                break;
            }
            collection.push(nextPrime);
        }
    }
    return collection;
};
var getBooleansCollection = function (collection) {
    return Array.from(collection, function (x) { return true; });
};
var getPrimes = function (max) {
    var firstCollection = getFirstCollection(max);
    var booleanCollection = getBooleansCollection(firstCollection);
    var getNextFilterCollection = function (collection, start) {
        var nextPrime = collection[start];
        var index = 1;
        var indexTwo = 1;
        var item = 6 * index * nextPrime - nextPrime;
        var itemTwo = 6 * index * nextPrime + nextPrime;
        while (collection.includes(item)) {
            booleanCollection[collection.indexOf(item)] = false;
            index++;
            item = 6 * index * nextPrime - nextPrime;
        }
        while (collection.includes(itemTwo)) {
            booleanCollection[collection.indexOf(itemTwo)] = false;
            indexTwo++;
            itemTwo = 6 * indexTwo * nextPrime + nextPrime;
        }
    };
    firstCollection.forEach(function (x) {
        if (booleanCollection[firstCollection.indexOf(x)]) {
            getNextFilterCollection(firstCollection, firstCollection.indexOf(x));
        }
    });
    return firstCollection.filter(function (x) { return booleanCollection[firstCollection.indexOf(x)] === true; });
};
function sumPrimes(num) {
    console.log(num);
    return getPrimes(num).reduce(function (a, c) { return a + c; });
}
sumPrimes(10);
sumPrimes(71);
