const taskFormView = 
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="card-title text-center text-primary">Agregar Nueva Tarea</h2>
      <form id="taskForm">
        <div class="form-group">
          <label for="taskName" class="text-primary">Nombre de la Tarea:</label>
          <input type="text" class="form-control" id="taskName" required>
        </div>
        <div class="form-group">
          <label for="taskDescription" class="text-primary">Descripción:</label>
          <textarea class="form-control" id="taskDescription" required></textarea>
        </div>
        <div class="form-group">
          <label for="taskDeadline" class="text-primary">Fecha Límite:</label>
          <input type="date" class="form-control" id="taskDeadline" required>
        </div>
        <div class="form-group">
          <label for="taskStatus" class="text-primary">Estado:</label>
          <select class="form-control" id="taskStatus">
            <option>Pendiente</option>
            <option>En Progreso</option>
            <option>Completada</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Agregar Tarea</button>
      </form>
    </div>
  </div>
;

function loadTaskFormView() {
  document.getElementById('app').innerHTML = taskFormView;
}
