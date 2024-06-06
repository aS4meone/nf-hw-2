export function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || [];
}
