import {useState, useEffect} from 'react';

export function useFilter(tasks) {
    const [filter, setFilter] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        setFilteredTasks(tasks.filter(task => {
            if (filter === 'all') return true;
            if (filter === 'active') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true;
        }));
    }, [tasks, filter]);

    return {
        filter,
        setFilter,
        filteredTasks
    };
}
