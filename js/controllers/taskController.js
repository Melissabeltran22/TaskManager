function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = `${task.name} - ${task.description} - ${task.deadline} - ${task.status}`;
      taskList.appendChild(listItem);
    });
  }