document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', function(event) {
      if (event.target && event.target.id === 'taskForm') {
        event.preventDefault();
  
        const name = document.getElementById('taskName').value;
        const description = document.getElementById('taskDescription').value;
        const deadline = document.getElementById('taskDeadline').value;
        const status = document.getElementById('taskStatus').value;
  
        if (name && description && deadline && status) {
          const newTask = new Task(name, description, deadline, status);
          tasks.push(newTask);
          alert('Tarea agregada exitosamente');
          loadDashboardView();
        } else {
          alert('Por favor, complete todos los campos.');
        }
      }
    });
  });
  