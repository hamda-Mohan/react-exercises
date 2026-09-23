import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import PostDetail from './Pages/PostDetail';
import CreatePost from './Pages/CreatePost';
import Login from './Pages/Login';
import NotFound from './components/NotFound';
import ProtectedRoute from './Components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'posts/:postId',
        element: <PostDetail/>,
      },
      {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePost/>
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <Login/>,
      },
    ],
  },
]);

export default router;
