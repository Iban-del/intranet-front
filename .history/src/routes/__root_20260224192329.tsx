import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import Navbar from '@/components/NavBar';
import { SidebarTrigger } from '@/components/ui/sidebar';




const RootLayout = () => {

    

    return  (
        <>
            <Navbar/>
            <main className='w-full'>
        
                <section>
                    <SidebarTrigger />
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