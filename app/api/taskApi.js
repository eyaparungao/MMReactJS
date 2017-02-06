
var taskLocalStorageKey = "TaskList";
var tasks = JSON.parse(localStorage.getItem(taskLocalStorageKey)) || [];

var initialTaskData = [{
  taskId: 1,
  name: "TaskName1",
  description: "This is Task # 1",
  priority: 1,
  statusId: "ToDo"
},{
  taskId: 2,
  name: "TaskName2",
  description: "This is Task # 2",
  priority: 3,
  statusId: "InProgress"
},{
  taskId: 3,
  name: "TaskName3",
  description: "This is Task # 3",
  priority: 2,
  statusId: "Done"
}];

var TaskApi = {
    initializeTasks: function() {        
        localStorage.setItem(taskLocalStorageKey, JSON.stringify(initialTaskData));
    },
    getAllTasks: function () {
        return JSON.parse(JSON.stringify(tasks));
    }
};

module.exports = TaskApi;

