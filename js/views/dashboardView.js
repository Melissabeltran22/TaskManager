const dashboardView = (user)
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="card-title text-center text-primary">Bienvenido, \${user.name}</h2>
      <h4 class="card-subtitle mb-2 text-muted">Departamento: \${user.department}</h4>
      <button id="logoutButton" class="btn btn-danger btn-block">Cerrar Sesión</button>
    </div>
  </div>
  <div class="card mt-3 shadow-sm">
    <div class="card-body">
      <h3 class="card-title text-primary">Tus Tareas</h3>
      <ul id="taskList" class="list-group">
        <!-- Aquí se añadirán las tareas -->
      </ul>
    </div>
  </div>
;

function loadDashboardView(user) {
  document.getElementById('app').innerHTML = dashboardView(user);
}

export { loadDashboardView };