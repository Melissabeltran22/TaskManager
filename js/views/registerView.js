const registerView = `
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="card-title text-center text-primary">Registro de Usuario</h2>
      <form id="registerForm">
        <div class="form-group">
          <label for="name" class="text-primary">Nombre:</label>
          <input type="text" class="form-control" id="name" required>
        </div>
        <div class="form-group">
          <label for="email" class="text-primary">Correo Electrónico:</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="form-group">
          <label for="password" class="text-primary">Contraseña:</label>
          <input type="password" class="form-control" id="password" required>
        </div>
        <div class="form-group">
          <label for="department" class="text-primary">Departamento:</label>
          <input type="text" class="form-control" id="department" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Registrar</button>
      </form>
    </div>
  </div>
`;

function loadRegisterView() {
  document.getElementById('app').innerHTML = registerView;
}
