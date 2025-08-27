import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import { Container, Typography } from '@mui/material'

function App() {

  return (
  <Provider store={store}>
    <Container>
      <Typography component="h1" variant='h2' align='center' marginY={4}>Habit Tracker</Typography>
    </Container>
  </Provider>
  )
}

export default App
