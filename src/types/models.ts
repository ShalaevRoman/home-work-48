export type HabitCategoryId =
  | 'health'
  | 'productivity'
  | 'learning'
  | 'mindfulness'
  | 'other'

export interface HabitCategoryMeta {
  id: HabitCategoryId
  label: string
}

export interface Habit {
  id: string
  name: string
  category: HabitCategoryId
  createdAt: string
  completedDates: string[]
}
