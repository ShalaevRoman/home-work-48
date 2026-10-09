import type { DayStat, Habit } from '../types/models'

const WEEKDAY_LABELS = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

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

export function getWeeklyStats(habits: Habit[]): DayStat[] {
  const days: DayStat[] = []

  for (let offset = 6; offset >= 0; offset -= 1) {
    const cursor = new Date()
    cursor.setDate(cursor.getDate() - offset)
    const date = cursor.toISOString().slice(0, 10)
    const count = habits.filter((habit) => habit.completedDates.includes(date)).length

    days.push({ date, label: WEEKDAY_LABELS[cursor.getDay()], count })
  }

  return days
}
