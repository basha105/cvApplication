import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeneralInfo from './components/genInfo.jsx'
import Education from './components/educ.jsx'
import WorkExperience from './components/workxp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <Education />
    <WorkExperience />
  </StrictMode>,
)
