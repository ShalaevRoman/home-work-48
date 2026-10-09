import { useState, type FC, type FormEvent } from 'react'
import type { HabitFormProps } from '../types/components'
import type { HabitCategoryId } from '../types/models'
import { HABIT_CATEGORIES } from '../constants/categories'

export const HabitForm: FC<HabitFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState<HabitCategoryId>(HABIT_CATEGORIES[0].id)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) return

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
      <button className="habit-form__button" type="submit">
        Додати
      </button>
    </form>
  )
}
