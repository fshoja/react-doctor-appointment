import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { DoctorContextProvider } from './context/CoctotContext.jsx'
createRoot(document.getElementById('root')).render(

<DoctorContextProvider>


    <StrictMode>
      <App />
    </StrictMode>,
</DoctorContextProvider>
 
)
