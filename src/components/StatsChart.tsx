import type { FC } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { StatsChartProps } from '../types/components'
import { getWeeklyStats } from '../utils/habitUtils'

export const StatsChart: FC<StatsChartProps> = ({ habits }) => {
  const data = getWeeklyStats(habits)

  return (
    <section className="stats-chart">
      <h2 className="stats-chart__title">Прогрес за останні 7 днів</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#8884" />
          <XAxis dataKey="label" tick={{ fill: '#888', fontSize: 13 }} axisLine={{ stroke: '#8884' }} />
          <YAxis allowDecimals={false} tick={{ fill: '#888', fontSize: 13 }} axisLine={{ stroke: '#8884' }} />
          <Tooltip
            formatter={(value) => [value, 'Виконано звичок']}
            labelFormatter={(label) => `День: ${label}`}
            contentStyle={{ background: '#1f2028', border: '1px solid #8884', borderRadius: 8, color: '#fff' }}
          />
          <Bar dataKey="count" fill="#aa3bff" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
