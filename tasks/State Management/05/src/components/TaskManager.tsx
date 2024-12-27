import React, { useReducer, useCallback, useMemo } from "react";
import { TaskManagerProps, Task, TaskStatus, TaskPriority } from "../types/TaskManager";
import { taskReducer, initialState } from "../reducers/taskReducer";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export const TaskManager: React.FC<TaskManagerProps> = ({ initialTasks = [] }) => {
  // TODO: Implement the component
  // 1. Initialize useReducer with taskReducer and initial state
  // 2. Create handlers for all actions
  // 3. Implement filtering and sorting logic
  // 4. Create UI components for:
  //    - Task list
  //    - Add task form
  //    - Filter controls
  //    - Sort controls
  //    - Statistics
  // 5. Optimize performance with useMemo and useCallback

  const [state, dispatch] = useReducer(taskReducer, {
    ...initialState,
    tasks: initialTasks,
  });

  const addTask = (title: string, description: string, priority: TaskPriority) => {
    dispatch({ type: "ADD_TASK", payload: { title, description, priority, status: "todo" } });
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={state.tasks} />
      {/* TODO: Implement UI */}
    </div>
  );
};
