import { useCallback, useState, type FC } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { IDLE_THROTTLE_MS, IDLE_TIMEOUT_MS } from '../constants/config'
import { notifyWarning } from '../utils/notify'

export const IdleTimerComponent: FC = () => {
  const [isIdle, setIsIdle] = useState(false)

  const handleIdle = useCallback(() => {
    setIsIdle(true)
    notifyWarning('Ви неактивні — не забудьте відмітити звички на сьогодні!')
  }, [])

  const handleActive = useCallback(() => {
    setIsIdle(false)
  }, [])

  useIdleTimer({
    timeout: IDLE_TIMEOUT_MS,
    throttle: IDLE_THROTTLE_MS,
    onIdle: handleIdle,
    onActive: handleActive,
  })

  return (
    <span className={`idle-status ${isIdle ? 'idle-status--idle' : ''}`}>
      <span className="idle-status__dot" />
      {isIdle ? 'Бездіяльність' : 'Активний'}
    </span>
  )
}
