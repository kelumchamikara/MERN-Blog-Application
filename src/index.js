import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Authors from './pages/Authors';
import CreatePosts from './pages/CreatePosts';
import EditPost from './pages/EditPost';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import PostAuthor from './Components/PostAuthor';
import DeletePost from './pages/DeletePost';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <PostDetails/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "profile/:id", element: <Profile/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreatePosts/>},
      {path: "posts/categories/:category", element: <CategoryPosts/>},
      {path: "posts/users/:id", element: <AuthorPosts/>},
     
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "posts/:id/delete", element: <DeletePost/>},
      {path: "logout", element: <Logout/>},
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



