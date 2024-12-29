import React, { useReducer, useCallback, useMemo } from 'react'
import {
  TaskManagerProps,
  Task,
  TaskStatus,
  TaskPriority,
} from '../types/TaskManager'
import { taskReducer, initialState } from '../reducers/taskReducer'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'

export const TaskManager: React.FC<TaskManagerProps> = ({
  initialTasks = [],
}) => {
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
  })

  const addTask = (
    title: string,
    description: string,
    priority: TaskPriority
  ) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { title, description, priority, status: 'todo' },
    })
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, ...updates } })
  }

  const updatePriority = (id: string, priority: TaskPriority) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, priority } })
  }

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } })
  }

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={state.tasks}
        onUpdateTask={updateTask}
        onUpdatePriority={updatePriority}
        onDeleteTask={deleteTask}
      />
      {/* TODO: Implement UI */}
    </div>
  )
}
