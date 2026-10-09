import { useState, type FC, type FormEvent } from 'react'
import { FaPlus } from 'react-icons/fa'
import type { HabitFormProps } from '../types/components'
import type { HabitCategoryId } from '../types/models'
import { HABIT_CATEGORIES } from '../constants/categories'
import { CATEGORY_ICONS } from '../constants/categoryIcons'
import { notifyWarning } from '../utils/notify'

export const HabitForm: FC<HabitFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState<HabitCategoryId>(HABIT_CATEGORIES[0].id)
  const SelectedIcon = CATEGORY_ICONS[category]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) {
      notifyWarning('Введіть назву звички')
      return
    }

    onAdd(trimmedName, category)
    setName('')
  }

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        className="habit-form__input"
        type="text"
        placeholder="Нова звичка, напр. Пити воду"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <div className="habit-form__select-wrap">
        <SelectedIcon className="habit-form__select-icon" />
        <select
          className="habit-form__select"
          value={category}
          onChange={(event) => setCategory(event.target.value as HabitCategoryId)}
        >
          {HABIT_CATEGORIES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <button className="habit-form__button" type="submit">
        <FaPlus />
        Додати
      </button>
    </form>
  )
}
