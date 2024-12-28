import React from "react";
import { Task, TaskStatus } from "../types/TaskManager";

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (id: string, payload: Partial<Task>) => void;
}

const getTaskStyle = (status: TaskStatus) => {
  const colors: Record<TaskStatus, string> = {
    todo: "red",
    "in-progress": "yellow",
    done: "green",
  };
  return {
    border: `1px solid ${colors[status]}`,
    margin: 10,
    padding: 0,
  };
};

export const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask }) => {
  return (
    <div className="container-task-list">
      {tasks.map((task) => (
        <div className="task" style={getTaskStyle(task.status)} key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={() => onUpdateTask(task.id, { status: "in-progress" })}>Start</button>
        </div>
      ))}
    </div>
  );
};
