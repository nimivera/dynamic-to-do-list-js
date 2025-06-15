document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
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
      };
  
      // Append the remove button to the li element
      task.appendChild(removeButton);
  
      // Append the li to taskList
      taskList.appendChild(task);
  
      // Clear the task input field
      taskInput.value = "";
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