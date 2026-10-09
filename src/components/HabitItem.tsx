import type { FC } from 'react'
import { FaCheck, FaFire, FaTrash } from 'react-icons/fa'
import type { HabitItemProps } from '../types/components'
import { HABIT_CATEGORIES } from '../constants/categories'
import { CATEGORY_ICONS } from '../constants/categoryIcons'
import { calculateStreak, isCompletedToday } from '../utils/habitUtils'

export const HabitItem: FC<HabitItemProps> = ({ habit, onToggle, onDelete }) => {
  const categoryLabel = HABIT_CATEGORIES.find((item) => item.id === habit.category)?.label
  const CategoryIcon = CATEGORY_ICONS[habit.category]
  const done = isCompletedToday(habit)
  const streak = calculateStreak(habit)

  return (
    <li className={`habit-item ${done ? 'habit-item--done' : ''}`}>
      <button
        className="habit-item__toggle"
        type="button"
        onClick={() => onToggle(habit.id)}
        aria-pressed={done}
        aria-label={done ? 'Позначити як невиконане' : 'Позначити як виконане'}
      >
        {done && <FaCheck />}
      </button>

      <div className="habit-item__info">
        <span className="habit-item__name">{habit.name}</span>
        <span className="habit-item__category">
          <CategoryIcon className="habit-item__category-icon" />
          {categoryLabel}
        </span>
      </div>

      <span className="habit-item__streak">
        <FaFire className="habit-item__streak-icon" />
        {streak}
      </span>

      <button
        className="habit-item__delete"
        type="button"
        onClick={() => onDelete(habit.id)}
        aria-label="Видалити звичку"
      >
        <FaTrash />
      </button>
    </li>
  )
}
