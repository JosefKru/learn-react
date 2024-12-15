import './App.css'
import { NotificationPreferences } from './components/NotificationPreferences'
import { NotificationCategory, NotificationFrequency } from './types/NotificationPreferences';

export const NOTIFICATION_CATEGORIES: NotificationCategory[] = ["news", "updates", "marketing", "security"];
export const NOTIFICATION_FREQUENCIES: NotificationFrequency[] = ["daily", "weekly", "monthly"];


function App() {
  const initialValues =  {
    email: '',
    frequency: ['daily'],
    time: '09:00',
    categories: [],
    maxNotifications: 3,
  }

  return <NotificationPreferences onSubmit={(data) => console.log('Saved data: ', data)}  initialValues={initialValues} />
}

export default App
