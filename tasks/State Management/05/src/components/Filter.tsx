interface FilterProps {
  onSort: (by: 'createdAt' | 'priority', order: 'asc' | 'desc') => void
}

export const Filter: React.FC<FilterProps> = ({ onSort }) => {
  return (
    <div className="filter">
      <button onClick={() => onSort('createdAt', 'asc')}>Сорт по возрастанию даты</button>
      <button onClick={() => onSort('createdAt', 'desc')}>Сорт по убыванию даты</button>
      <button onClick={() => onSort('priority', 'asc')}>Сорт по возрастанию приоритета</button>
      <button onClick={() => onSort('priority', 'desc')}>Сорт по убыванию приоритета</button>
    </div>
  )
}
