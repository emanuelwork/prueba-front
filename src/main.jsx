import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Layout from "./layouts/Layout.jsx"

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>,
)
