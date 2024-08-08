import User from '../models/userModel.js';
import { loadRegisterView } from '../views/registerView.js';
import { loadLoginView } from '../views/loginView.js';
import { loadDashboardView } from '../views/dashboardView.js';

document.addEventListener('DOMContentLoaded', () => {
  loadRegisterView();

  document.addEventListener('submit', function(event) {
    if (event.target && event.target.id === 'registerForm') {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const department = document.getElementById('department').value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name && email && password && department && emailRegex.test(email)) {
        const user = new User(name, email, password, department);
        localStorage.setItem(email, JSON.stringify(user));
        alert('Registro exitoso');
        loadLoginView();
      } else {
        alert('Por favor, complete todos los campos correctamente.');
      }
    } else if (event.target && event.target.id === 'loginForm') {
      event.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const storedUser = JSON.parse(localStorage.getItem(email));

      if (storedUser && storedUser.password === password) {
        alert('Inicio de sesión exitoso');
        loadDashboardView(storedUser);
      } else {
        alert('Credenciales incorrectas. Por favor, intente nuevamente.');
      }
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'registerLink') {
      loadRegisterView();
    } else if (event.target && event.target.id === 'loginLink') {
      loadLoginView();
    }



  });
});

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'logoutButton') {
      alert('Cerrando sesión');
      loadLoginView();
    }
  });
