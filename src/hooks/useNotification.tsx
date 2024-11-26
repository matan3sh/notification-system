import { useEffect, useState } from 'react'
import Notification, { NotificationProps } from '../components/Notification'
import { NotificationWithId, Position } from '../components/Notification.types'
import { generateId } from '../components/Notification.utils'

const useNotification = (position: Position = 'bottom-left') => {
  const [notifications, setNotifications] = useState<NotificationWithId[]>([])

  const addNotification = (notification: NotificationProps) => {
    setNotifications((prev) => [...prev, { ...notification, id: generateId() }])
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  useEffect(() => {
    const timers = notifications.map((notification) =>
      notification.duration
        ? setTimeout(
            () => removeNotification(notification.id),
            notification.duration
          )
        : null
    )

    return () => timers.forEach((timer) => timer && clearTimeout(timer))
  }, [notifications])

  const NotificationComponent = (
    <div className={`notification-container ${position}`}>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  )

  return { triggerNotification: addNotification, NotificationComponent }
}

export default useNotification
