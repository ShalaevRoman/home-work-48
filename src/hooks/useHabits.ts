import { useCallback, useEffect, useState } from 'react'
import type { Habit, HabitCategoryId } from '../types/models'
import { STORAGE_KEY } from '../constants/config'
import { getTodayKey } from '../utils/habitUtils'
import { notifyError, notifyInfo, notifySuccess } from '../utils/notify'

function loadHabits(): Habit[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Habit[]) : []
  } catch {
    return []
  }
}

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>(loadHabits)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits))
  }, [habits])

  const addHabit = useCallback((name: string, category: HabitCategoryId) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name,
      category,
      createdAt: getTodayKey(),
      completedDates: [],
    }
    setHabits((prev) => [...prev, newHabit])
    notifySuccess(`Звичку "${name}" додано!`)
  }, [])

  const deleteHabit = useCallback(
    (id: string) => {
      const habit = habits.find((item) => item.id === id)
      setHabits((prev) => prev.filter((item) => item.id !== id))
      if (habit) notifyError(`Звичку "${habit.name}" видалено`)
    },
    [habits],
  )

  const toggleToday = useCallback(
    (id: string) => {
      const today = getTodayKey()
      const habit = habits.find((item) => item.id === id)
      if (!habit) return

      const isDone = habit.completedDates.includes(today)

      setHabits((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                completedDates: isDone
                  ? item.completedDates.filter((date) => date !== today)
                  : [...item.completedDates, today],
              }
            : item,
        ),
      )

      if (isDone) {
        notifyInfo(`Позначку з "${habit.name}" знято`)
      } else {
        notifySuccess(`"${habit.name}" виконано сьогодні! 🔥`)
      }
    },
    [habits],
  )

  return { habits, addHabit, deleteHabit, toggleToday }
}
