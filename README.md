# Habit Tracker

Домашнє завдання: інтеграція спеціалізованих бібліотек у React-додаток.

Трекер звичок — додавайте звички, позначайте їх виконаними щодня, слідкуйте
за серіями (streak) та переглядайте прогрес за останній тиждень на графіку.
Дані зберігаються локально в браузері (`localStorage`).

## Технології та бібліотеки

- **React 19 + TypeScript + Vite** — основа проекту
- **[react-icons](https://react-icons.github.io/react-icons/)** — іконки категорій звичок та кнопок дій (додати/виконати/видалити)
- **[react-toastify](https://fkhadra.github.io/react-toastify/)** — сповіщення типів success / error / warning / info при додаванні, виконанні, знятті позначки та видаленні звички, а також валідації форми
- **[react-idle-timer](https://idletimer.dev/)** — відстеження бездіяльності користувача: через 15 секунд без активності показується індикатор "Бездіяльність" у шапці та попередження-нагадування відмітити звички
- **[recharts](https://recharts.org/)** — стовпчиковий графік виконання звичок за останні 7 днів

## Структура проекту

```
src/
├── types/          # Типи та інтерфейси (models.ts, components.ts)
├── constants/       # Константи (категорії, іконки категорій, конфіг)
├── components/       # React-компоненти
├── hooks/            # Кастомний хук useHabits (CRUD + localStorage)
├── utils/            # Утиліти (розрахунок streak, статистика, toast-хелпери)
├── App.tsx
└── main.tsx
```

## Встановлення та запуск

```bash
npm install
npm run dev
```

Відкрийте http://localhost:5173 у браузері.

### Збірка production-версії

```bash
npm run build
npm run preview
```

## Посилання на проект

Демо: https://home-work-48-wheat.vercel.app
GitHub: https://github.com/ShalaevRoman/home-work-48
