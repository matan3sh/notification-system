import { NotificationProps } from './Notification'

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export interface NotificationWithId extends NotificationProps {
  id: string
}

export type NotificationType = 'info' | 'error' | 'warning' | 'success'
