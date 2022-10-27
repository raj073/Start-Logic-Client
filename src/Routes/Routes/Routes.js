import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../Pages/Home/Home';
import Courses from '../../Pages/Courses/Courses';
import Blog from '../../Pages/Blog/Blog';
import FAQ from '../../Pages/FAQ/FAQ';
import Login from '../../Pages/Login/Login';
import Register from "../../Pages/Register/Register";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Checkout from "../../Pages/Checkout/Checkout";


export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://distance-learning.vercel.app/course')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://distance-learning.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://distance-learning.vercel.app/course/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <div className='text-center bg-info m-5 p-5 rounded'>
                    <h2>404 Not Found <br /> This route is not found.</h2> </div>
            }

        ]
    }
])