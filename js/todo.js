const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

let toDos = [];
const todos_key = "todos";

function saveToDos(){
  localStorage.setItem(todos_key, JSON.stringify(toDos));
}

function deleteToDo(e){
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo){
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
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
  const newTodiObj = {
    id: Date.now(),
    text: newToDo,
  }
  toDos.push(newTodiObj);
  paintToDo(newTodiObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(todos_key);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}