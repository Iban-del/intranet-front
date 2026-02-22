import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import NavBar from '@/components/NavBar';


const RootLayout = () => {


    return  (
        <>
            <NavBar/>
            <main>
                
                <header className=' h-24 w-screen border-b-2'>
                    <SidebarTrigger />
                </header>
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