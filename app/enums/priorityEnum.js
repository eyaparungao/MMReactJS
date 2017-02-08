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
    },
    getAllPriorities: function() {
        var priorities = [];
        priorities.push({key: this.low, value: this.toString(this.low)});
        priorities.push({key: this.medium, value: this.toString(this.medium)});
        priorities.push({key: this.high, value: this.toString(this.high)});
        return priorities;
    }
}

module.exports = priorityEnum;