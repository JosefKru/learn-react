import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskManager } from '../TaskManager'
import { taskReducer, initialState } from '../../reducers/taskReducer'
import { TaskAction, TaskState } from '../../types/TaskManager'

describe('TaskManager', () => {
  // Test reducer
  describe('taskReducer', () => {
    const stateWithTask: TaskState = {
      ...initialState,
      tasks: [{
        id: '1',
        createdAt: new Date(),
        description: 'test',
        priority: 'high',
        status: "in-progress",
        title: 'Test'
      }]
    }

    it('should handle ADD_TASK action', () => {
      const state = taskReducer(initialState, {
        type: 'ADD_TASK',
        payload: { description: 'test', title: 'Test', priority: 'high', status: 'todo' },
      })
      expect(state.tasks).toHaveLength(1)
    })

    it('should handle UPDATE_TASK action', () => {
      const state = taskReducer(stateWithTask, {
        type: 'UPDATE_TASK',
        payload: {status: 'done', id: '1'}
      })

      expect(state.tasks[0].status).toEqual('done')
    })

    it('should handle DELETE_TASK action', () => {
      const state = taskReducer(stateWithTask, {
        type: 'DELETE_TASK',
        payload: {id: '1'}
      })

      expect(state.tasks).toHaveLength(0)
    })

    it('should handle SET_FILTER action', () => {
      const state = taskReducer(initialState, {type: 'SET_FILTER', payload: {type: 'priority', value: 'medium' }})
      expect(state.filters).toEqual({
        priority: 'medium'
      })
    })

    it('should handle SET_SORT action', () => {
      const state = taskReducer(initialState, {type: 'SET_SORT', payload: {by: 'createdAt', order: 'desc'}})
      expect(state.sort).toEqual({
        by: 'createdAt',
        order: 'desc'
      })
    })
  })

  // Test component
  describe('TaskManager Component', () => {
    it('renders empty state correctly', () => {
      // TODO: Test initial render
      render(<TaskManager initialTasks={[]} />)

      const emptyState = screen.getByText('Нет задач')
      expect(emptyState).toBeInTheDocument()
    })

    // it('can add a new task', async () => {
    //   render(<TaskManager initialTasks={[]} />);
    
    //   const titleInput = screen.getByTestId('title');
    //   const descInput = screen.getByTestId('description');
    //   const priority = screen.getByTestId('priority');
    //   const addBtn = screen.getByText('Add task');

    //   expect(titleInput).toBeInTheDocument()
    
    //   userEvent.type(titleInput, 'Test Task');
    //   userEvent.type(descInput, 'test description');
    //   userEvent.selectOptions(priority, 'high');
    //   userEvent.click(addBtn);

    //   screen.debug()
    
    //   const taskList = screen.queryByTestId('task-list-desc');
    //   expect(taskList).not.toBeInTheDocument();
    
    //   const addedTask = await screen.findByText('test description');
    //   expect(addedTask).toBeInTheDocument();

    //   // WTF? Почему не работает?
    // });
    

    it('can update task status', async () => {
      // TODO: Test updating task
      
    })

    it('can delete a task', async () => {
      // TODO: Test deleting task
    })

    it('filters tasks correctly', async () => {
      // TODO: Test filtering
    })

    it('sorts tasks correctly', async () => {
      // TODO: Test sorting
    })

    it('displays correct statistics', async () => {
      // TODO: Test statistics
    })
  })
})
