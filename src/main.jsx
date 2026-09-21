import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Kumar from './Kumar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kumar />
  </StrictMode>,
)
