const statusEnum = {
    todo: 1,
    inprogress: 2,
    done: 3,
    toString: function(value) {
        const result = "";
        switch(value) {
            case 1:
                return "To Do";
            case 2:
                return "In Progress";
            case 3: 
                return "Done";
        }
        return result;
    },
    getAllStatuses: function() {
        const statuses = [];
        statuses.push({key: this.todo, value: this.toString(this.todo)});
        statuses.push({key: this.inprogress, value: this.toString(this.inprogress)});
        statuses.push({key: this.done, value: this.toString(this.done)});
        return statuses;
    }
}

export default statusEnum;