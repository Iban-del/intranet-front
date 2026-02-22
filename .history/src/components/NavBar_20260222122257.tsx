import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, useSidebar } from "./ui/sidebar"

const NavBar = () => {

    const { toggleSidebar } = useSidebar()

    return (
        <aside
            className="h-full w-screen"
        >
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
            <nav
                className="w-full"
            >
                <button onClick={toggleSidebar}>Toggle Sidebar</button>
            </nav>
        </aside>
    )
}



export default NavBar