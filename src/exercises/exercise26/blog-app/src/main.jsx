import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './route.jsx'

import { PostsProvider } from './Context/PostsContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <PostsProvider>
    <RouterProvider router={router} />
  </PostsProvider>
</AuthProvider>
  </StrictMode>,
)
