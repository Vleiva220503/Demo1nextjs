// components/TaskForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';

const TaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      dispatch(addTask({ id: Date.now(), title: taskTitle }));
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Task Title
      </label>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="mt-1 p-2 w-full border rounded"
      />
      <button
        type="submit"
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
