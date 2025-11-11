import { useState } from 'react';
import API from '../api';

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = async () => {
    if (!title) return alert('Please enter a task title');
    try {
      const res = await API.post('/tasks', { title, description });
      onTaskAdded(res.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3>Add New Task</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      /><br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      /><br />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
