'use strict';

// Create a simple to-do list application that allows users to add, remove, and mark tasks as complete. Firstly, start with a basic HTML structure. Then, use JavaScript to handle user interactions and update the list dynamically. Next, focus on implementing features like adding new tasks, checking off completed tasks, and deleting tasks. Additionally, enhance the project by incorporating features such as storing tasks in the browser’s local storage, enabling task prioritization, or adding due dates.

const todoItems = document.querySelector('.input--items');
const todoDates = document.querySelector('.input--date');
const todoBtn = document.querySelector('.submit-btn');
const showBtn = document.querySelector('.show-btn');
const todoApp = document.querySelector('.todo-section');
const displayTodos = document.querySelector('.todos');
const todoComBtn = document.querySelector('.todo-complete');
const todoDoneBtn = document.querySelector('.todo--done');
const todoBoxBtn = document.querySelector('.todo-box');
const itemsTodo = document.querySelector('.items-todo');

console.log(todoDoneBtn);
let todoLists = [
  // items: 'Wash Plates',
  // dueDate: '08/22/2024',
];

function displayTodo() {
  let todoListHTML = '';
  todoLists.forEach((todo, i) => {
    const { items, dueDate } = todo;
    const html = `
    <div class="display--todo todo-grid">
        
    <button 
  
    class="todo-complete ">
      <ion-icon name="checkbox" class="hidden todo--done"></ion-icon>    

      <ion-icon name="square-outline" class=" todo-box"></ion-icon> 
    </button>
    <div class="items-todo">
    
    ${i + 1} ${items} </div>
    <div class="items-time">${dueDate} </div>
    <div>
      <button onclick = "todoLists.splice(${i}, 1); displayTodo();" class="delete-btn dbtn"><ion-icon name="close-circle"></ion-icon></button">
    </div>
  </div>
    `;

    todoListHTML += html;
    displayTodos.innerHTML = todoListHTML;
    // console.log(todoListHTML);
  });
}

showBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (showBtn.textContent === 'Show Todo') {
    displayTodo();
    showBtn.textContent = 'Hide Todo';
    displayTodos.style.opacity = '1';
  } else {
    showBtn.textContent = 'Show Todo';
    displayTodos.style.opacity = '0';
  }
});

todoBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const items = todoItems.value;
  const dueDate = todoDates.value;
  if (items !== '' && dueDate !== '') {
    todoLists.push({ items, dueDate });
    displayTodo();
  } else {
    alert('Kindly enter a Todo Item');
  }
  todoItems.value = '';
  todoDates.value = '';
});
