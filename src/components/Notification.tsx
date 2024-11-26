import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './Notification.css'
import { NotificationType } from './Notification.types'
import { ICONS } from './Notification.utils'

export interface NotificationProps {
  type?: NotificationType
  message: string
  onClose?: () => void
  duration?: number
}

const Notification = ({
  type = 'info',
  message,
  onClose,
  duration = 5000,
}: NotificationProps) => {
  const [isExiting, setIsExiting] = useState(false)

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      if (onClose) onClose()
    }, 300)
  }

  useEffect(() => {
    const timer = setTimeout(handleClose, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <div className={`notification ${type} ${isExiting ? 'exit' : ''}`}>
      {ICONS[type]}
      <span>{message}</span>
      <AiOutlineClose
        className="close-button"
        color="white"
        onClick={handleClose}
      />
    </div>
  )
}

export default Notification
