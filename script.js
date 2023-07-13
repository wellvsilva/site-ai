document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter os valores do usuário e senha digitados
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verificar se as credenciais são válidas
    var validCredentials = checkCredentials(username, password);
  
    if (validCredentials) {
      // Credenciais válidas, redirecionar para a página de produtos
      window.location.href = 'products.html';
    } else {
      // Credenciais inválidas, exibir mensagem de erro
      var errorElement = document.getElementById('error-message');
      errorElement.textContent = 'Usuário ou senha inválidos.';
      errorElement.style.display = 'block';
    }
  });
  
  function checkCredentials(username, password) {
    // Aqui você pode implementar a lógica para verificar as credenciais
    // Por exemplo, comparar com uma base de dados ou lista de usuários
  
    // Verificar se o usuário e senha correspondem ao valor padrão
    var defaultUsername = 'admin';
    var defaultPassword = '123456';
  
    return (username === defaultUsername && password === defaultPassword);
  }
  