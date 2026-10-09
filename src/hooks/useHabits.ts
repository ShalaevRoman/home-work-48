import { useCallback, useEffect, useState } from 'react'
import type { Habit, HabitCategoryId } from '../types/models'
import { STORAGE_KEY } from '../constants/config'
import { getTodayKey } from '../utils/habitUtils'

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
  }, [])

  const deleteHabit = useCallback((id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id))
  }, [])

  const toggleToday = useCallback((id: string) => {
    const today = getTodayKey()
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit
        const isDone = habit.completedDates.includes(today)
        return {
          ...habit,
          completedDates: isDone
            ? habit.completedDates.filter((date) => date !== today)
            : [...habit.completedDates, today],
        }
      }),
    )
  }, [])

  return { habits, addHabit, deleteHabit, toggleToday }
}
