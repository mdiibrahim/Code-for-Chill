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
import Checkout from '../../Pages/Checkout/Checkout';
import Error from '../../Pages/Error/Error';
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
                    loader: () => fetch('http://localhost:5000/courses'),
                },
                {
                    path: '/courses/:id',
                    element: <CourseDetails></CourseDetails>,
                    loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
                    
                },
                {
                    path: '/checkout/courses/:id',
                    element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                    loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
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
                {
                    path: '/*',
                    element: <Error></Error>
                }
                
                
            ]
        },
        
        
    ])