import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSocket } from '../context/SocketContext';
import axios from 'axios';
import TaskModal from '../components/TaskModal';
import TaskCard from '../components/TaskCard';
import Navbar from '../components/Navbar';
import './Tasks.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Tasks = () => {
  const { user } = useAuth();
  const socket = useSocket();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('task-created', (task) => {
        setTasks((prev) => [task, ...prev]);
      });

      socket.on('task-updated', (task) => {
        setTasks((prev) =>
          prev.map((t) => (t._id === task._id ? task : t))
        );
      });

      socket.on('task-deleted', ({ id }) => {
        setTasks((prev) => prev.filter((t) => t._id !== id));
      });

      return () => {
        socket.off('task-created');
        socket.off('task-updated');
        socket.off('task-deleted');
      };
    }
  }, [socket]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = () => {
    setEditingTask(null);
    setShowModal(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${API_URL}/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        // Socket will handle the update
      } catch (error) {
        console.error('Error deleting task:', error);
        alert('Failed to delete task');
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'pending') return task.status === 'Pending';
    if (filter === 'in-progress') return task.status === 'In Progress';
    if (filter === 'completed') return task.status === 'Completed';
    return true;
  });

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="loading">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="tasks-header">
          <h1 className="page-title">My Sports Tasks</h1>
          <button onClick={handleCreateTask} className="btn btn-primary">
            + New Task
          </button>
        </div>

        <div className="tasks-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
            className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
            onClick={() => setFilter('in-progress')}
          >
            In Progress
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <h2>No tasks found</h2>
            <p>Create your first sports task to get started!</p>
            <button onClick={handleCreateTask} className="btn btn-primary">
              Create Task
            </button>
          </div>
        ) : (
          <div className="task-list">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        )}

        {showModal && (
          <TaskModal
            task={editingTask}
            onClose={handleCloseModal}
            onSave={fetchTasks}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;

