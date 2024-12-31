import { useState } from 'react'
import { TaskPriority } from '../types/TaskManager'
import { priorityArr } from './TaskList'

interface TaskFormProps {
  onAddTask: (title: string, description: string, priority: TaskPriority) => void
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<TaskPriority>('low')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(title, description, priority)
    setTitle('')
    setDescription('')
    setPriority('low')
  }

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input data-testid='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
        required
        data-testid='description'
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)} data-testid='priority'>
        {priorityArr.map(p => <option key={p} value={p}>{p}</option>)}
      </select>
      <button type='submit'>Add Task</button>
    </form>
  )
}
