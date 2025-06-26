document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskBtn = document.getElementById('add-task');
    const tasksUl = document.getElementById('tasks');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.className = 'task-list-item';

        // Mark as completed on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(removeBtn);
        return li;
    }

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskEl = createTaskElement(taskText);
            tasksUl.appendChild(taskEl);
            taskInput.value = '';
        }
    });

    // Allow Enter key to add task
    taskInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});