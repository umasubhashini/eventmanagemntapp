import React, { useState, useEffect } from 'react';
import './App.css';

function TodoApp({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [editedPriority, setEditedPriority] = useState('');

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        text: taskInput,
        priority: taskPriority,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
      setTaskPriority('low');
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Function to update the task text
  const updateTaskText = (index) => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = editedTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditedTask('');
    }
  };

  // Function to update the task priority
  const updateTaskPriority = (index) => {
    if (editedPriority.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index].priority = editedPriority;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditedPriority('');
    }
  };

  // Helper functions to count tasks based on priority
  const countHighPriorityTasks = () => tasks.filter((task) => task.priority === 'high').length;
  const countMediumPriorityTasks = () => tasks.filter((task) => task.priority === 'medium').length;
  const countLowPriorityTasks = () => tasks.filter((task) => task.priority === 'low').length;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <button onClick={onLogout}>Logout</button>
      
      {/* Task count display */}
      <div>
        <p>Total Tasks: {tasks.length}</p>
        <p>High Priority Tasks: {countHighPriorityTasks()}</p>
        <p>Medium Priority Tasks: {countMediumPriorityTasks()}</p>
        <p>Low Priority Tasks: {countLowPriorityTasks()}</p>
      </div>

      {/* Input to add a task */}
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              backgroundColor:
                task.priority === 'high'
                  ? '#ff8888'
                  : task.priority === 'medium'
                  ? '#ffff88'
                  : '#88ff88',
            }}
          >
            <div>
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button onClick={() => updateTaskText(index)}>Save Text</button>
                </div>
              ) : (
                <div>
                  {task.text}
                  <button onClick={() => setEditingIndex(index)}>Edit Text</button>
                </div>
              )}
            </div>
            <div>
              {editingIndex === index ? (
                <div>
                  <select
                    value={editedPriority}
                    onChange={(e) => setEditedPriority(e.target.value)}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <button onClick={() => updateTaskPriority(index)}>Save Priority</button>
                </div>
              ) : (
                <div>
                  Priority: {task.priority}
                  <button onClick={() => setEditingIndex(index)}>Edit Priority</button>
                </div>
              )}
            </div>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
