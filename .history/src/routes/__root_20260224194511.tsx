import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import Navbar from '@/components/NavBar';




const RootLayout = () => {

    

    return  (
        <>
            <Navbar/>
            <main className='w-full'>
        
                <section>
                    <button onClick={toggleSidebar}>Toggle Sidebar</button>
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