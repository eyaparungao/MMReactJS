import _ from 'lodash';

const taskLocalStorageKey = "TaskList";
const tasks = JSON.parse(localStorage.getItem(taskLocalStorageKey)) || [];

const initialTaskData = [{
  taskId: 1,
  name: "TaskName1",
  description: "This is Task # 1",
  priority: 1,
  status: 1
},{
  taskId: 2,
  name: "TaskName2",
  description: "This is Task # 2",
  priority: 3,
  status: 2
},{
  taskId: 3,
  name: "TaskName3",
  description: "This is Task # 3",
  priority: 2,
  status: 3
}];

const getNewId = function () {
    if (tasks && tasks.length >= 1) {
        var max = _.maxBy(tasks, function (task) { return task.taskId; });
        return max.taskId + 1;
    }
    return 1;
};

const TaskApi = {
    initializeTasks: function() {        
        localStorage.setItem(taskLocalStorageKey, JSON.stringify(initialTaskData));
    },
    getAllTasks: function() {
        return JSON.parse(JSON.stringify(tasks));
    },
    saveTask: function(task) {
        if (task.taskId != 0) {
            const existingTask = _.indexOf(tasks, _.find(tasks, { taskId: task.taskId }));
            tasks.splice(existingTask, 1, task);
        } else {
            task.taskId = getNewId();
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

export default TaskApi;

