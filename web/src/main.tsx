import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './shared/styles/global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyles isDarkTheme={false} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
