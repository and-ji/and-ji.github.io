import { createRoot } from 'react-dom/client'
import { Navigation } from './components/Navigation'

const navigationContainer = document.querySelector('.react-navigation')
if (navigationContainer) {
  const root = createRoot(navigationContainer)
  root.render(<Navigation />)
}