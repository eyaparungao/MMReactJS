
var taskLocalStorageKey = "TaskList";
var tasks = JSON.parse(localStorage.getItem(taskLocalStorageKey)) || [];
var _ = require('lodash');

var initialTaskData = [{
  taskId: 1,
  name: "TaskName1",
  description: "This is Task # 1",
  priority: 1,
  statusId: 1
},{
  taskId: 2,
  name: "TaskName2",
  description: "This is Task # 2",
  priority: 3,
  statusId: 2
},{
  taskId: 3,
  name: "TaskName3",
  description: "This is Task # 3",
  priority: 2,
  statusId: 3
}];

var getNewId = function () {
    if (tasks && tasks.length >= 1) {
        var max = _.maxBy(tasks, function (task) { return task.taskId; });
        return max.id + 1;
    }
    return 1;
};

var TaskApi = {
    initializeTasks: function() {        
        localStorage.setItem(taskLocalStorageKey, JSON.stringify(initialTaskData));
    },
    getAllTasks: function() {
        return JSON.parse(JSON.stringify(tasks));
    },
    saveTask: function(task) {
        if (task.id) {
            var existingTask = _.indexOf(tasks, _.find(tasks, { id: task.id }));
            tasks.splice(existingTask, 1, task);
        } else {
            task.id = getNewId();
            tasks.push(task);
        }
        localStorage.setItem(taskLocalStorageKey, JSON.stringify(tasks));
        return JSON.parse(JSON.stringify(tasks));
    },
    deleteTask: function(taskId) {
        _.remove(tasks, { taskId: taskId });
        localStorage.setItem(taskLocalStorageKey, JSON.stringify(tasks));
    }
};

module.exports = TaskApi;

