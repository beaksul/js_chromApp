const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-input');
const loginBtn = document.querySelector('#login-btn');
const greeting = document.querySelector('#greeting');

const username = loginInput.value;
const hiddenClass = 'hidden';
const usernameKey = 'username';

function onLoginSubmit(e){
  e.preventDefault();
  loginForm.classList.add(hiddenClass);
  const username = loginInput.value;
  localStorage.setItem(usernameKey, username);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(hiddenClass); 
}

const saveUsername = localStorage.getItem(usernameKey);

if(saveUsername === null){
  loginForm.classList.remove(hiddenClass);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(saveUsername);
}