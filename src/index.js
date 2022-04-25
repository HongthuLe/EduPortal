import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from './assets/theme/custom'
import AuthContextProvider from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
