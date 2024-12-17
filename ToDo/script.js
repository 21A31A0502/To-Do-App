// Add task functionality
document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('task-list');

  // Create task item
  const taskItem = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';
}

// Optional: Add keyboard support for "Enter" key
document.getElementById('task-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
