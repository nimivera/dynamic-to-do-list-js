document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage
    loadTasks();
  
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false));
    }
  
    function addTask(taskText, save = true) {
      // If taskText is not provided (e.g. from input), get from input field
      if (!taskText) {
        taskText = taskInput.value.trim();
      }
  
      // Validate input
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      // Create a new li element and set its textContent to taskText
      const task = document.createElement('li');
      task.textContent = taskText;
  
      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
  
      // Assign an onclick event to the remove button
      removeButton.onclick = function() {
        taskList.removeChild(task);
        removeTaskFromStorage(taskText);
      };
  
      // Append the remove button to the li element
      task.appendChild(removeButton);
  
      // Append the li to taskList
      taskList.appendChild(task);
  
      // Save task to Local Storage
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
  
      // Clear the task input field
      taskInput.value = "";
    }
  
    function removeTaskFromStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    // Add an event listener to addButton
    addButton.addEventListener('click', function() {
      addTask();
    });
  
    // Add an event listener to taskInput for the ‘keypress’ event
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });