import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses';
import Home from '../../Pages/Home/Home';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import Blogs from '../../Pages/Blogs/Blogs'
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import FAQ from '../../Pages/FAQ/FAQ';
    export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/courses',
                    element: <Courses></Courses>,
                    loader: () => fetch('https://code-for-chill-server-side.vercel.app/courses'),
                },
                {
                    path: '/courses/:id',
                    element: <CourseDetails></CourseDetails>,
                    loader:({params})=>fetch(`https://code-for-chill-server-side.vercel.app/courses/${params.id}`),
                    
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>,
                },
                {
                    path: '/frequently-asked-questions',
                    element: <FAQ></FAQ>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>,
                },
                
            ]
        },
        
        
    ])