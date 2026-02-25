import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { APP_NAME, LOGO_PATH } from "@/config"
import { Home } from "lucide-react"
import { Button } from "./ui/button"


const ICON_CLASS = "w-10 mr-4"

const Navbar = () => {

    const { open } = useSidebar();

    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader className="flex flex-row">
                <SidebarMenu>
                    <img src={LOGO_PATH} className={ICON_CLASS} />
                    {open && 
                        <h1 className="text-4xl">{APP_NAME}</h1>
                    }
                </SidebarMenu>
            </SidebarHeader>
            <hr/>
            <SidebarContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    
                <Home className={ICON_CLASS} />
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    
    )
}

export default Navbar