'use strict';

const todos = document.querySelector('.todos');
const textContent = document.querySelector('.textContent');
const addButton = document.querySelector('.addButton');


const createTodo = todo => {
    const html = `
    <li class="todoItem">
        <span class="item">${todo}</span>
        <button class="done">DONE</button>
        <button class="delete">DELETE</button>
    </li>`;
    todos.innerHTML += html;
}

addButton.addEventListener('click', e => {
    const todo = textContent.value;
    if(todo.length){
        createTodo(todo);
        textContent.value = '';
        todos.addEventListener('click', e => {
            if(e.target.classList.contains('delete')){
                e.target.parentElement.remove();
            }
        })
        todos.addEventListener('click', e => {
            if(e.target.classList.contains('done')){
                const marker = e.target.parentElement.firstElementChild;
                marker.innerHTML += '←Finished!!!'
                e.target.remove();
            }
        })
    }
})

