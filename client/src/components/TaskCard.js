import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <div>
          <h3 className="task-title">{task.title}</h3>
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
        </div>
      </div>

      <div className="task-meta">
        <span className={`task-badge badge-sport`}>{task.sport}</span>
        <span className={`task-badge badge-priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        <span className={`task-badge badge-status-${task.status.toLowerCase().replace(' ', '-')}`}>
          {task.status}
        </span>
        {task.dueDate && (
          <span className="task-badge" style={{ background: '#f5f5f5', color: '#666' }}>
            Due: {formatDate(task.dueDate)}
          </span>
        )}
      </div>

      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
          className="btn btn-primary btn-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

