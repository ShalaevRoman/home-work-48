import { HabitForm, HabitList, IdleTimerComponent, StatsChart, ToastNotification } from './components'
import { useHabits } from './hooks/useHabits'
import { isCompletedToday } from './utils/habitUtils'
import './App.css'

function App() {
  const { habits, addHabit, deleteHabit, toggleToday } = useHabits()
  const completedToday = habits.filter((habit) => isCompletedToday(habit)).length

  return (
    <div className="app">
      <header className="app__header">
        <IdleTimerComponent />
        <h1>Habit Tracker</h1>
        <p className="app__subtitle">
          Виконано сьогодні: {completedToday} / {habits.length}
        </p>
      </header>

      <main className="app__main">
        <HabitForm onAdd={addHabit} />
        <HabitList habits={habits} onToggle={toggleToday} onDelete={deleteHabit} />
        <StatsChart habits={habits} />
      </main>

      <ToastNotification />
    </div>
  )
}

export default App
