import React from 'react';
import { createRoot } from 'react-dom/client'
import App from "./App"

const appContainer = document.getElementById('app')
createRoot(appContainer).render(<App />)