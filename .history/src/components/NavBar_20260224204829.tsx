import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { APP_NAME, LOGO_PATH } from "@/config"
import { Home, LogOut, User2 } from "lucide-react"
import { Button } from "./ui/button"
import type { JSX } from "react"


const ICON_CLASS = "w-10 mr-4"

export interface navbarProps {
    elements:navbarElement[]
}

export interface navbarElement{
    title:string,
    icon:JSX.Element,
    href:string,
    children?:navbarElement[]
}


const Navbar = ({
    elementss
}:navbarProps) => {

    const { open } = useSidebar();

    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader className="flex flex-row items-center h-10">
                <img src={LOGO_PATH} className={ICON_CLASS} />
                {open && 
                    <h1 className="text-3xl">{APP_NAME}</h1>
                }
            </SidebarHeader>
            <hr/>
            <SidebarContent className="">
            <SidebarMenu>
                <SidebarMenuItem>
                    
                <Home className={ICON_CLASS} />
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarContent>
            <hr/>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                        <LogOut /> Logout
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                        <User2 /> Username
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    
    )
}

export default Navbar