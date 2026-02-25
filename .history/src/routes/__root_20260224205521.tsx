import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import Navbar, { type navbarElement } from '@/components/NavBar';
import { useSidebar } from '@/components/ui/sidebar';
import { PanelLeft } from 'lucide-react';
import { elementsGroups } from '@/config';





const RootLayout = () => {

    const { toggleSidebar } = useSidebar()

    return  (
        <>
            <Navbar elements={elementsGroups} />
            <main className='w-full'>
                <header className='h-10 bg-foreground border-b-1 flex items-center'>
                    <button onClick={toggleSidebar}>
                        <PanelLeft className="w-10 mr-4" />
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