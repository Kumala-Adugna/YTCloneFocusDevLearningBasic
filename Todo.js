const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todos = [
    { text: "Welcome to your to-do list!", completed: false },
    { text: "Click the checkbox to mark as complete", completed: false },
    { text: "Hover to delete items", completed: true }
];

function render() {
    todoList.innerHTML = '';
    let active = 0, completed = 0;

    todos.forEach((todo, index) => {
        const item = document.createElement('div');
        item.className = 'todo-item';
        
        if(todo.completed) completed++; else active++;

        item.innerHTML = `
            <div class="checkbox ${todo.completed ? 'completed' : 'active'}" onclick="toggle(${index})">
                ${todo.completed ? '✓' : ''}
            </div>
            <span class="todo-text ${todo.completed ? 'done' : ''}">${todo.text}</span>
            <span class="delete-btn" onclick="remove(${index})">✕</span>
        `;
        todoList.appendChild(item);
    });

    document.getElementById('activeCount').innerText = active;
    document.getElementById('completedCount').innerText = completed;
    document.getElementById('totalCount').innerText = todos.length;
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;
    todos.push({ text: text, completed: false });
    todoInput.value = '';
    render();
}

function toggle(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

function remove(index) {
    todos.splice(index, 1);
    render();
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTodo(); });

render();