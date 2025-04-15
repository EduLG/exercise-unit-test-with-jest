test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);

});

test("One dollar should be 146.26 YEN", function(){

    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);

});

test("One Yen to be 0.0055 GBP", function(){

    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1)).toBeCloseTo(0.0055);

});



