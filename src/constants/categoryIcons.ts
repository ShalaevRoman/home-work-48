import type { IconType } from 'react-icons'
import { FaBook, FaHeartbeat, FaLeaf, FaStar, FaTasks } from 'react-icons/fa'
import type { HabitCategoryId } from '../types/models'

export const CATEGORY_ICONS: Record<HabitCategoryId, IconType> = {
  health: FaHeartbeat,
  productivity: FaTasks,
  learning: FaBook,
  mindfulness: FaLeaf,
  other: FaStar,
}
