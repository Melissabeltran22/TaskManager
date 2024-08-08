import Task from '../models/taskModel.js';

function addTask(title, description, dueDate, status, userEmail) {
  const task = new Task(title, description, dueDate, status, userEmail);
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks(userEmail) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks.filter(task => task.userEmail === userEmail);
}

function deleteTask(taskIndex, userEmail) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const userTasks = tasks.filter(task => task.userEmail === userEmail);
  userTasks.splice(taskIndex, 1);
  localStorage.setItem('tasks', JSON.stringify(userTasks));
}

export { addTask, getTasks, deleteTask };