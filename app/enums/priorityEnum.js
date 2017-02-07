'use strict';

var priorityEnum = {
    low: 1,
    medium: 2,
    high: 3,
    toString: function(value) {
        var result = "";
        switch(value) {
            case 1:
                return "Low";
            case 2:
                return "Medium";
            case 3: 
                return "High";
        }
        return result;
    }
}

module.exports = priorityEnum;