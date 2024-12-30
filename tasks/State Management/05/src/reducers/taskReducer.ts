import { TaskState, TaskAction, Task } from '../types/TaskManager'

// TODO: Implement the reducer function
// 1. Handle ADD_TASK action
// 2. Handle UPDATE_TASK action
// 3. Handle DELETE_TASK action
// 4. Handle SET_FILTER action
// 5. Handle SET_SORT action
// Remember to keep the reducer pure!

export const initialState: TaskState = {
  tasks: [],
  filters: {},
  sort: {
    by: 'createdAt',
    order: 'desc',
  },
}

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: String(Math.random()),
            createdAt: new Date(),
            ...action.payload,
          },
        ],
      }

    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          return task.id === action.payload.id ? { ...task, ...action.payload } : task
        }),
      }

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      }

    case 'SET_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: action.payload.value,
        },
      }

    case 'SET_SORT':
      return {
        ...state,
        sort: {
          by: action.payload.by,
          order: action.payload.order,
        },
      }

    default:
      return state
  }
}
