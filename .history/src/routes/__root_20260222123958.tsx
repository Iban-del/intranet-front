import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import NavBar from '@/components/NavBar';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';


const RootLayout = () => {
    const { toggleSidebar } = useSidebar()

    return  (
        <>
            <NavBar/>
            <main className='max-w-screen'>
                
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