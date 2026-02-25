import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { LogOut, User2 } from "lucide-react"
import { useMemo, type JSX } from "react"
import { APP_NAME, LOGO_PATH } from "@/config"


const ICON_CLASS = "w-10 mr-4"

export interface navbarProps {
    elements:navbarElementsGroup[]
}

export interface navbarElementsGroup {
    title:string,
    elements:navbarElement[]
}

export interface navbarElement{
    title:string,
    icon:JSX.Element,
    href:string,
    children?:navbarElement[]
}


const Navbar = ({
    elements
}:navbarProps) => {

    const { open } = useSidebar();

    const Content = useMemo(()=>{
        
    },[elements]);

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
                    <SidebarGroup>

                    </SidebarGroup>
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