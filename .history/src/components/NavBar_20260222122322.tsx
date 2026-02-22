import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, useSidebar } from "./ui/sidebar"

const NavBar = () => {

    const { toggleSidebar } = useSidebar()

    return (
        <section
            className="h-full w-screen"
        >
            <aside>
                <Sidebar>
                    <SidebarHeader >
                        test
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup />
                        <SidebarGroup />
                    </SidebarContent>
                    <SidebarFooter />
                </Sidebar>
            </aside>
            
            <nav
                className="w-full"
            >
                <button onClick={toggleSidebar}>Toggle Sidebar</button>
            </nav>
        </section>
    )
}



export default NavBar