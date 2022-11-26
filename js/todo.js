const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

function deleteToDo(e){
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newToDo){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newToDo;
  const btn = document.createElement('button');
  btn.innerText = 'X';
  btn.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);