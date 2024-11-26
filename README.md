# React Notification System

A reusable React notification system to display success, error, warning, and info messages with customizable durations and positioning.

## Features

- **Customizable**: Supports different types of notifications (`success`, `error`, `warning`, `info`).
- **Auto Dismiss**: Automatically removes notifications after a set duration.
- **Flexible Positioning**: Place notifications in any screen corner (`top-left`, `top-right`, etc.).
- **Reusable Hook**: Simplifies integration into your project.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/notification-system.git
   ```
2. Navigate to the directory:
   ```bash
   cd notification-system
   ```
3. Run the app
   ```bash
   npm start
   ```

## Usage

1. Import the useNotification hook
2. Use it in your component:

```javascript
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
    {NotificationComponent}
  </>
)
```

3. Customize notification types, messages, durations, and position as needed.
