// script.js
document.getElementById("button").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello, JavaScript!";
});

const form = document.querySelector('.modal-content');

const obiWanUser = {
  username: "TheRealObiWan",
  password: "UseTheForce"
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === obiWanUser.username && password === obiWanUser.password) {
    window.location.href = "obiwan.HTML";
  } else {
    alert("Username or password incorrect. Access denied.");
  }
});
