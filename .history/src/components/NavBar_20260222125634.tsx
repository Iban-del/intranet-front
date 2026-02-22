import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "./ui/sidebar"

const NavBar = () => {

    

    return (
        <section className="h-full">
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