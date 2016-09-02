(function() {
    'use strict';


    var _id = function _id(id) {
        return document.getElementById(id);
    }

    var convert = function convert(temp) {
        var f = parseFloat(_id("Fahrenheit")['value']);
        var c = parseFloat(_id("Celsius")['value']);

        if (temp == "Fahrenheit") {
            var cel = (f - 32) * 5 / 9;
            console.log(f, ' is equl to ', cel, 'Celsius');
            _id("Celsius")['value'] = cel || "";
        } else {
            var fah = (c * 1.8) + 32;
            console.log(c, ' is equl to ', fah, 'Fahrenheit');
            _id("Fahrenheit")['value'] = fer || "";
        }

    };

})();
