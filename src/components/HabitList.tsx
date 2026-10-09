import type { FC } from 'react'
import type { HabitListProps } from '../types/components'
import { HabitItem } from './HabitItem'

export const HabitList: FC<HabitListProps> = ({ habits, onToggle, onDelete }) => {
  if (habits.length === 0) {
    return <p className="habit-list__empty">Звичок ще немає — додайте першу вище.</p>
  }

  return (
    <ul className="habit-list">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}
