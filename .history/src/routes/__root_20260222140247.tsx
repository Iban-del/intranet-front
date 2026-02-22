import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import NavBar from '@/components/NavBar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Header from '@/components/Header';

const DO_CONNECTED = [
    "/auth/login"
]

const RootLayout = () => {


    return  (
        <>
            <NavBar/>
            <main className='w-full'>
                <Header/>
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