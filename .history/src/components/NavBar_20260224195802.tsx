import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { Home } from "lucide-react"

const Navbar = () => {



    return (
        <Sidebar>
            <SidebarHeader>
                
            </SidebarHeader>
            <hr/>
            <SidebarContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    
                <Home className="mr-2 h-4 w-4" />
                Dashboard
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    
    )
}

export default Navbar