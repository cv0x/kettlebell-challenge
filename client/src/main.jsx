import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react';

const {VITE_CLERK_PUBLISHABLE_KEY} = import.meta.env;

const clerkPubKey = VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ClerkProvider publishableKey={clerkPubKey}>
    <App />
    </ClerkProvider>
    </Router>
  </React.StrictMode>,
)
