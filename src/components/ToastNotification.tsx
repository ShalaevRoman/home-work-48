import type { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastNotification: FC = () => (
  <ToastContainer
    position="bottom-right"
    autoClose={3000}
    newestOnTop
    closeOnClick
    pauseOnHover
    theme="colored"
  />
)
