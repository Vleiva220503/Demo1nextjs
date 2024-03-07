// components/TaskEditForm.tsx
import React, { useState } from 'react';
import { Task } from '../store/types';

interface TaskEditFormProps {
  task: Task;
  onSave: (editedTask: Task) => void;
  onClose: () => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({ task, onSave, onClose }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    onSave({ ...task, title: editedTitle });
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Edit Task Title
      </label>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="mt-1 p-2 w-full border rounded"
      />
      <button
        onClick={handleSave}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
      <button
        onClick={onClose}
        className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded"
      >
        Cancel
      </button>
    </div>
  );
};

export default TaskEditForm;
