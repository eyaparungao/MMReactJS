const priorityEnum = {
    low: 1,
    medium: 2,
    high: 3,
    toString: function(value) {
        const result = "";
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
        const priorities = [];
        priorities.push({key: this.low, value: this.toString(this.low)});
        priorities.push({key: this.medium, value: this.toString(this.medium)});
        priorities.push({key: this.high, value: this.toString(this.high)});
        return priorities;
    }
}

export default priorityEnum;