// components/TaskList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, deleteTask, editTask } from '../store/reducers';
import TaskEditForm from './TaskEditForm';
import { Task } from '../store/types';

const TaskList: React.FC = () => {
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleDelete = (taskId: number) => {
        dispatch(deleteTask(taskId));
    };

    const handleEdit = (task: Task) => {
        setSelectedTask(task);
    };

    const handleSaveEdit = (editedTask: Task) => {
        dispatch(editTask(editedTask));
        setSelectedTask(null);
    };
    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white shadow-md rounded my-6 p-4">
                <table className="min-w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase">
                            <th className="py-2 px-4 text-center">Title</th>
                            <th className="py-2 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        {tasks.map((task) => (
                            <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-2 px-4 text-center">{task.title}</td>
                                <td className="py-2 px-4 text-center">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded-full mr-2 transition duration-300 transform hover:scale-110"
                                        onClick={() => handleEdit(task)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-full transition duration-300 transform hover:scale-110"
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedTask !== null && (
                <TaskEditForm
                    task={selectedTask}
                    onSave={handleSaveEdit}
                    onClose={() => setSelectedTask(null)}
                />
            )}
        </div>
    );

};

export default TaskList;
