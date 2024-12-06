// Функция для скрытия приветственного сообщения
function closeWelcomeMessage() {
  document.getElementById('welcome-message').style.display = 'none';
}
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
window.onload = function() {
  const hour = new Date().getHours();
  const greeting = document.getElementById('greeting');
  
  if (hour < 12) {
    greeting.innerHTML = 'Доброе утро!';
  } else if (hour < 18) {
    greeting.innerHTML = 'Добрый день!';
  } else {
    greeting.innerHTML = 'Добрый вечер!';
  }
};
<script>
  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
      alert('Пожалуйста, заполните все поля.');
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      alert('Введите корректный адрес электронной почты.');
      return false;
    }

    return true;
  }
</script>

<form onsubmit="return validateForm()">
  <label for="name">Ваше имя:</label><br>
  <input type="text" id="name" name="name"><br><br>
  
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>
  
  <label for="message">Сообщение:</label><br>
  <textarea id="message" name="message"></textarea><br><br>
  
  <button type="submit">Отправить</button>
</form>
