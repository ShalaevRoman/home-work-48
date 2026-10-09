import type { Habit, HabitCategoryId } from './models'

export interface HabitFormProps {
  onAdd: (name: string, category: HabitCategoryId) => void
}

export interface HabitItemProps {
  habit: Habit
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export interface HabitListProps {
  habits: Habit[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export interface StatsChartProps {
  habits: Habit[]
}
