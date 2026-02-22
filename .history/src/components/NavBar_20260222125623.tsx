import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarTrigger } from "./ui/sidebar"

const NavBar = () => {

    

    return (
        <section className="h-full">
            <Sidebar>
                <SidebarHeader >
                    <SidebarTrigger />
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