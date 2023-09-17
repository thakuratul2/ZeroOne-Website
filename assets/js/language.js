document.addEventListener('DOMContentLoaded', function () {
  const welcomeMessage = document.getElementById('welcomeMessage');
  const languages = ['Welcome...', 'स्वागतम्', 'Bienvenu', 'Willkommen','いらっしゃいませ','Bienvenido','Welkom','Benvenuto','환영','Witamy','добро пожаловать','Welcome...']; 
  let currentIndex = 0;

  
  function changeLanguage() {
    welcomeMessage.textContent = languages[currentIndex];
    currentIndex = (currentIndex + 1) % languages.length; 
    setTimeout(changeLanguage, 3000); 
  }
  changeLanguage();
});
