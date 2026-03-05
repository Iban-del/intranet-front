import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import Navbar, { type navbarElement } from '@/components/NavBar';
import { useSidebar } from '@/components/ui/sidebar';
import { PanelLeft } from 'lucide-react';
import { NAV_EXCLUED } from '@/config';
import NotFound from '@/components/pages/notfound';






const RootLayout = () => {

    const { toggleSidebar } = useSidebar()
    const showNavbar = !NAV_EXCLUED.includes(window.location.pathname)


    return  (
        <>
            {showNavbar && <Navbar />}
            <main className='w-full'>
                    {showNavbar && 
                        <header className='h-10 bg-foreground border-b-1 flex items-center'>
                            <button onClick={toggleSidebar}>
                                <PanelLeft className="w-10 mr-4" />
                            </button>
                        </header>
                    }
                <section className='p-5'>
                    <Outlet />
                    {/* <TanStackRouterDevtools /> */}
                </section>
                <footer>

                </footer>
            </main>
        </>
    )
}

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent:() => <NotFound></NotFound>
})