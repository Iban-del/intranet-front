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
    console.log(window.location.pathname.toString())
    const doConnected = DO_CONNECTED.includes(window.location.pathname.toString());

    return  (
        <>
            {doConnected && <NavBar/>}
            <main className='w-full'>
                {doConnected && <Header/>}
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