import React from "react";
import { Task } from "../types/TaskManager";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="container-task-list">
      {tasks.map((task) => (
        <div className="task">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
