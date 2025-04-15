let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };