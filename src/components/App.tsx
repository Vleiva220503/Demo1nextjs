// components/App.tsx
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-end p-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleForm}
        >
          {showForm ? 'Close Form' : 'Add Task'}
        </button>
      </div>
      {showForm && <TaskForm />}
      <TaskList />
    </div>
  );
};

export default App;
