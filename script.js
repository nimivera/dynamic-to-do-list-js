document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      // Create a new li element and set its textContent to taskText
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create a new button element for removing the task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.className = 'remove-btn';
  
      // Assign an onclick event to the remove button
      removeBtn.onclick = function() {
        taskList.removeChild(li);
      };
  
      // Append the remove button to the li element, then append the li to taskList
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      // Clear the task input field
      taskInput.value = "";
    }
  
    // Add an event listener to addButton that calls addTask when the button is clicked
    addButton.addEventListener('click', addTask);
  
    // Add an event listener to taskInput for the ‘keypress’ event
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });