import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';

const HIDE_NAVBAR = [
    "/auth/login"
]

const IN_NAV = [
    
]

const RootLayout = () => {

    const hideNavbar = !HIDE_NAVBAR.includes(window.location.pathname.toString());

    return  (
        <>
            {hideNavbar && <NavBar/>}
            <main className='w-full'>
                {hideNavbar && <Header/>}
                <section>
                    <Outlet />
                    <TanStackRouterDevtools />
                </section>
                <footer>

                </footer>
            </main>
        </>
    )
}

export const Route = createRootRoute({ component: RootLayout })