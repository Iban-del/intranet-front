import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { APP_NAME, LOGO_PATH } from "@/config"
import { Home } from "lucide-react"


const ICON_SIZE = "w-10"

const Navbar = () => {

    const { open } = useSidebar();

    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader>
                <div className="w-full h-24 flex flex-col items-center">
                    <img src={LOGO_PATH} className={"mr-2 "+ICON_SIZE} />
                    {open && <h1>{APP_NAME}</h1>}
                </div>
            </SidebarHeader>
            <hr/>
            <SidebarContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    
                <Home className={"mr-2 "+ICON_SIZE} />
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    
    )
}

export default Navbar