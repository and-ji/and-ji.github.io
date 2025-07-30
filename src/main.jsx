
import ReactDOM from 'react-dom/client'

function App() {
  return <div>Hello from React!</div>
}

// Mount React when containers exist
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-app')
  if (container) {
    ReactDOM.createRoot(container).render(<App />)
  }
})