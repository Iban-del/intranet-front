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
            
           
        </section>
    )
}

//<button onClick={toggleSidebar}>Toggle Sidebar</button>

/*
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
                */

export default NavBar