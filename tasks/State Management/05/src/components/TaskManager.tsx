import React, { useReducer, useCallback, useMemo } from 'react'
import { TaskManagerProps, Task, TaskStatus, TaskPriority, TaskState } from '../types/TaskManager'
import { taskReducer, initialState } from '../reducers/taskReducer'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'
import { Filter } from './Filter'

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
  })

  const addTask = useCallback((title: string, description: string, priority: TaskPriority) => {
    dispatch({ type: 'ADD_TASK', payload: { title, description, priority, status: 'todo' } })
  }, [])

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, ...updates } })
  }, [])

  const updatePriority = useCallback((id: string, priority: TaskPriority) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, priority } })
  }, [])

  const deleteTask = useCallback((id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } })
  }, [])

  const setSort = useCallback((by: 'createdAt' | 'priority', order: 'asc' | 'desc') => {
    dispatch({ type: 'SET_SORT', payload: { by, order } })
  }, [])

  const setFilter = useCallback(
    (type: 'status' | 'priority', value: TaskStatus | TaskPriority | undefined) => {
      dispatch({ type: 'SET_FILTER', payload: { type, value } })
    },
    []
  )

  const filteredTasks = useMemo((): Task[] => {
    const { tasks, sort, filters } = state
    let sortedTasks = tasks

    if (filters.status) sortedTasks = sortedTasks.filter((task) => task.status === filters.status)
    if (filters.priority) sortedTasks = sortedTasks.filter((task) => task.priority === filters.priority)

    return sortedTasks.sort((a, b) => {
      if (sort.by === 'createdAt') {
        return sort.order === 'asc' ? +a.createdAt - +b.createdAt : +b.createdAt - +a.createdAt
      } else {
        const priority = {
          low: 1,
          medium: 2,
          high: 3,
        }
        return sort.order === 'asc'
          ? priority[a.priority] - priority[b.priority]
          : priority[b.priority] - priority[a.priority]
      }
    })
  }, [state])

  return (
    <div className='main-container'>
      <h2>Task Manager</h2>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        onUpdateTask={updateTask}
        onUpdatePriority={updatePriority}
        onDeleteTask={deleteTask}
      />
      <Filter onSort={setSort} onFilter={setFilter} filters={state.filters} />
    </div>
  )
}
