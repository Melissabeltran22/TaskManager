const loginView = `
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="card-title text-center text-primary">Inicio de Sesión</h2>
      <form id="loginForm">
        <div class="form-group">
          <label for="loginEmail" class="text-primary">Correo Electrónico:</label>
          <input type="email" class="form-control" id="loginEmail" required>
        </div>
        <div class="form-group">
          <label for="loginPassword" class="text-primary">Contraseña:</label>
          <input type="password" class="form-control" id="loginPassword" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
      </form>
    </div>
  </div>
`;

function loadLoginView() {
  document.getElementById('app').innerHTML = loginView;
}
