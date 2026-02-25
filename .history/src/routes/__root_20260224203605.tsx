import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import Navbar from '@/components/NavBar';
import { useSidebar } from '@/components/ui/sidebar';




const RootLayout = () => {

    const { toggleSidebar } = useSidebar()

    return  (
        <>
            <Navbar/>
            <main className='w-full'>
                <header className='h-10'>
                    <button onClick={toggleSidebar}>Toggle Sidebar</button>
                </header>
                <section>
                    <Outlet />
                    {/* <TanStackRouterDevtools /> */}
                </section>
                <footer>

                </footer>
            </main>
        </>
    )
}

export const Route = createRootRoute({ component: RootLayout })