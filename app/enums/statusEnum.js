'use strict';

var statusEnum = {
    todo: 1,
    inprogress: 2,
    done: 3,
    toString: function(value) {
        var result = "";
        switch(value) {
            case 1:
                return "To Do";
            case 2:
                return "In Progress";
            case 3: 
                return "Done";
        }
        return result;
    }
}

module.exports = statusEnum;