import useNotification from './hooks/useNotification'

function App() {
  const { NotificationComponent, triggerNotification } = useNotification()

  return (
    <>
      <button
        onClick={() =>
          triggerNotification({
            type: 'success',
            message: 'This is a success message',
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: 'error',
            message: 'This is a error message',
            duration: 3000,
          })
        }
      >
        Trigger Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: 'warning',
            message: 'This is a warning message',
            duration: 3000,
          })
        }
      >
        Trigger Warning
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: 'info',
            message: 'This is a info message',
            duration: 3000,
          })
        }
      >
        Trigger Info
      </button>
      {NotificationComponent}
    </>
  )
}

export default App
