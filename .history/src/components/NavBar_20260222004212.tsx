import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "./ui/sidebar"

const NavBar = () => {

    const { toggleSidebar } = useSidebar()

    return (
        <section
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
        </section>
    )
}



export default NavBar