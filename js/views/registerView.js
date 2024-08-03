const registerView = `
  <form id="registerForm">
    <input type="text" id="name" placeholder="Nombre" required>
    <input type="email" id="email" placeholder="Correo Electrónico" required>
    <input type="password" id="password" placeholder="Contraseña" required>
    <input type="text" id="department" placeholder="Departamento" required>
    <button type="submit">Registrar</button>
  </form>
`;

document.getElementById('app').innerHTML = registerView;
