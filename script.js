document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'Raul' && password === '25072021') {
        window.location.href = 'feed.html';

      // Redirecionar ou carregar feed aqui
    } else {
      alert('Usuário ou senha inválidos!');
    }
  });
  
  function handleCredentialResponse(response) {
    const data = parseJwt(response.credential);
    alert(`Bem-vindo, ${data.name}`);
  }
  
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  }

  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "SEU_CLIENT_ID_AQUI",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-login"),
      {
        theme: "outline",
        size: "large",
        text: "continue_with",
      }
    );
  }
