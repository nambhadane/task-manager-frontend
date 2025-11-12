import { useEffect, useState } from 'react';
import API from '../api';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  const toggleStatus = async (task) => {
    const updated = { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' };
    await API.put(`/tasks/${task._id}`, updated);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet — add one above! 😊</p>;
  }

  return (
    <div>
      {tasks.map((t) => (
        <div key={t._id} className="task-item">
          <div>
            <strong>{t.title}</strong>
            <span className={`status ${t.status}`}>{t.status}</span>
            <p>{t.description}</p>
          </div>
          <div>
            <button onClick={() => toggleStatus(t)}>
              {t.status === 'Pending' ? 'Mark Done' : 'Mark Pending'}
            </button>
            <button onClick={() => deleteTask(t._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
