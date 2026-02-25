import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import Navbar from '@/components/NavBar';
import { useSidebar } from '@/components/ui/sidebar';
import { PanelLeft } from 'lucide-react';




const RootLayout = () => {

    const { toggleSidebar } = useSidebar()

    return  (
        <>
            <Navbar/>
            <main className='w-full'>
                <header className='h-10 bg-foreground border-b-1'>
                    <button onClick={toggleSidebar}>
                        <PanelLeft />
                    </button>
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