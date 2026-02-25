import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { LOGO_PATH } from "@/config"
import { Home } from "lucide-react"

const Navbar = () => {



    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader>
                <div className="w-full h-full">
                    <img src={LOGO_PATH} className="mr-2 h-4 w-10" />
                </div>
            </SidebarHeader>
            <hr/>
            <SidebarContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    
                <Home className="mr-2 h-4 w-4" />
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    
    )
}

export default Navbar