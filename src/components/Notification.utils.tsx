import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from 'react-icons/ai'

export const generateId = () => `${Date.now()}-${Math.random()}`
export const ICONS = {
  info: <AiOutlineInfoCircle />,
  error: <AiOutlineCloseCircle />,
  warning: <AiOutlineWarning />,
  success: <AiOutlineCheckCircle />,
}
