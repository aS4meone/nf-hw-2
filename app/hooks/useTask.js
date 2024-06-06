import {useState, useEffect} from 'react';
import {loadTasks, saveTasks} from "@/app/utils/localStorage";

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = loadTasks();
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (text) => {
        if (text.trim()) {
            const newTask = {id: Date.now(), text, completed: false};
            setTasks([...tasks, newTask]);
        }
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const clearCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    return {
        tasks,
        addTask,
        toggleTask,
        deleteTask,
        clearCompletedTasks
    };
}
