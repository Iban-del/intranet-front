import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { LogOut, User2 } from "lucide-react"
import { useMemo, type JSX } from "react"
import { APP_NAME, elementsGroups, LOGO_PATH } from "@/config"


const ICON_CLASS = "w-10 mr-4"


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

export interface navbarElementProps{
    elements:navbarElement[]
}


const Navbar = () => {

    const { open } = useSidebar();

    const content = useMemo(()=>{
        
        const groupList:JSX.Element[] = [];
        elementsGroups.forEach((el)=>{
            groupList.push(
                <SidebarGroup key={"group-"+el.title}>
                    <SidebarGroupLabel>
                        {el.title}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <NavbarElement elements={el.elements}/>
                    </SidebarGroupContent>
                </SidebarGroup>
            )
        })
        
        return groupList;
    },[]);

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
                {content}
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

const NavbarElement = ({
    elements
}:navbarElementProps) =>{

    return (
        <SidebarMenu>
            {elements.map((element)=>{

                if(element.children){
                    return <NavbarElement elements={element.children}/>
                }
                return (
                    <SidebarMenuItem key={element.title}>
                    <SidebarMenuButton asChild>
                        <a href={element.href}>
                        {element.icon}
                        <span>{element.title}</span>
                        </a>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                )
                
            })}
        </SidebarMenu>
    )
}

export default Navbar