import type { Habit } from '../types/models'

export function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

export function isCompletedToday(habit: Habit): boolean {
  return habit.completedDates.includes(getTodayKey())
}

// Counts consecutive completed days ending today (or yesterday, if today isn't done yet).
export function calculateStreak(habit: Habit): number {
  const dates = new Set(habit.completedDates)
  const cursor = new Date()

  if (!dates.has(getTodayKey())) {
    cursor.setDate(cursor.getDate() - 1)
  }

  let streak = 0
  while (dates.has(cursor.toISOString().slice(0, 10))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }

  return streak
}
