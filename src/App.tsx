import { HabitForm, HabitList, ToastNotification } from './components'
import { useHabits } from './hooks/useHabits'
import './App.css'

function App() {
  const { habits, addHabit, deleteHabit, toggleToday } = useHabits()
  const completedToday = habits.filter((habit) =>
    habit.completedDates.includes(new Date().toISOString().slice(0, 10)),
  ).length

  return (
    <div className="app">
      <header className="app__header">
        <h1>Habit Tracker</h1>
        <p className="app__subtitle">
          Виконано сьогодні: {completedToday} / {habits.length}
        </p>
      </header>

      <main className="app__main">
        <HabitForm onAdd={addHabit} />
        <HabitList habits={habits} onToggle={toggleToday} onDelete={deleteHabit} />
      </main>

      <ToastNotification />
    </div>
  )
}

export default App
