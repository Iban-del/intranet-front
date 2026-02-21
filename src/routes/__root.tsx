import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import NavBar from '@/components/NavBar';


const RootLayout = () => (
    <>
        <header
            className=' h-24 w-screen'
        >
            <NavBar/>
        </header>
        <main
            className='w-screen h-full'
        >
            <Outlet />
            <TanStackRouterDevtools />
        </main>
        <footer>

        </footer>
    </>
)

export const Route = createRootRoute({ component: RootLayout })