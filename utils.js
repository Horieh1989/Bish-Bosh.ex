function showMessage(message)
{
    document.getElementById("message").textContent=message;
}


function highlightTheButton(button)
{
   
   
}
function addTask() {
    const taskText = newTaskInput.value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    newTaskInput.value = '';
}

newTaskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});