import { TaskPriority, TaskStatus } from '../types/TaskManager'
import { priorityArr } from './TaskList'

interface FilterProps {
  onSort: (by: 'createdAt' | 'priority', order: 'asc' | 'desc') => void
  onFilter: (type: 'status' | 'priority', value: TaskStatus | TaskPriority | undefined) => void
  filters: { status?: TaskStatus, priority?: TaskPriority }
}
export const statuses: TaskStatus[] = ['todo', 'in-progress', 'done']

export const Filter: React.FC<FilterProps> = ({ onSort, onFilter, filters}) => {

  const handleChangeFilterStatus = (e: any) => {
    if (e.target.value === 'all') {
      onFilter('status', undefined)
    } else {
      onFilter('status', e.target.value as TaskStatus)
    }
  }
  const handleChangeFilterPriority = (e: any) => {
    if (e.target.value === 'all') {
      onFilter('priority', undefined)
    } else {
      onFilter('priority', e.target.value as TaskStatus)
    }
  }

  return (
    <div className='filter'>
     <div>
     <span>Фильтровать по статусу</span>
      <select value={filters.status} onChange={handleChangeFilterStatus}>
        <option value='all'>All</option>
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
     </div>

    <div>
    <span>Фильтровать по приоритету</span>
      <select value={filters.priority} onChange={handleChangeFilterPriority}>
        <option value='all'>All</option>
        {priorityArr.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
    </div>

      <button onClick={() => onSort('createdAt', 'asc')}>Сорт по возрастанию даты</button>
      <button onClick={() => onSort('createdAt', 'desc')}>Сорт по убыванию даты</button>
      <button onClick={() => onSort('priority', 'asc')}>Сорт по возрастанию приоритета</button>
      <button onClick={() => onSort('priority', 'desc')}>Сорт по убыванию приоритета</button>
    </div>
  )
}
