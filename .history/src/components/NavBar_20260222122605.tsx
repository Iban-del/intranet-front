import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, useSidebar } from "./ui/sidebar"

const NavBar = () => {

    const { toggleSidebar } = useSidebar()

    return (
        <section
            className="h-full w-screen"
        >
            <aside
                className="w-fit fixed"
            >
               
            </aside>
            
            <div
                className=" h-full"
            >
                
            </div>
        </section>
    )
}



export default NavBar

//<button onClick={toggleSidebar}>Toggle Sidebar</button>