import React from 'react'
import { Task, TaskPriority, TaskStatus } from '../types/TaskManager'

interface TaskListProps {
  tasks: Task[]
  onUpdateTask: (id: string, payload: Partial<Task>) => void
  onDeleteTask: (id: string) => void
  onUpdatePriority: (id: string, priority: TaskPriority) => void
}

const getTaskStyle = (status: TaskStatus) => {
  const colors: Record<TaskStatus, string> = {
    todo: 'red',
    'in-progress': 'yellow',
    done: 'green',
  }
  return {
    border: `1px solid ${colors[status]}`,
    margin: 10,
    padding: 0,
  }
}

export const priorityArr: TaskPriority[] = ['low', 'medium', 'high']

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onUpdateTask,
  onDeleteTask,
  onUpdatePriority,
}) => {
  return (
    <div className='container-task-list'>
      {tasks.map((task) => (
        <div className='task' style={getTaskStyle(task.status)} key={task.id}>
          <h3>{task.title}</h3>
          <p data-testid='task-list-desc'>{task.description}</p>
          <p>Status: {task.status}</p>
          <div>
            <span>Priority: </span>
            <select
              value={task.priority}
              onChange={(e) => onUpdatePriority(task.id, e.target.value as TaskPriority)}
            >
              {priorityArr.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <p>Date: {task.createdAt.toISOString()}</p>
          </div>
          <div>
            <button onClick={() => onUpdateTask(task.id, { status: 'in-progress' })}>Start</button>
            <button onClick={() => onUpdateTask(task.id, { status: 'done' })}>Done</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
