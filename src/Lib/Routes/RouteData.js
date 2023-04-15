import Dashboard from "../../Pages/DashboardPage/DashboardPage"
import LandingPage from "../../Pages/LandingPage/LandingPage"
import LoginPage from "../../Pages/LoginPage/LoginPage"
import RegisterPage from "../../Pages/RegisterPage/RegisterPage"

export const routeData = {
    public:[
        {
            path:'/',
            element:<LandingPage />
        },
        {
            path:'/login',
            element:<LoginPage />
        },
        {
            path:'/register',
            element:<RegisterPage />
        }

    ],
    private:[
        {
            path:'/dashboard',
            element:<Dashboard />
        }

    ]
}