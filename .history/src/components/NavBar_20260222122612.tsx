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
            
            <div
                className=" h-full"
            >
                
            </div>
        </section>
    )
}

//<button onClick={toggleSidebar}>Toggle Sidebar</button>

export default NavBar