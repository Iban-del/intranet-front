import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css";
import Navbar from '@/components/NavBar';




const RootLayout = () => {

    

    return  (
        <>
            <main className='w-full'>
            <Navbar/>
        
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