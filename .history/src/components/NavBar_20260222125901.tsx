import { DropdownMenu } from "radix-ui"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { ChevronDown } from "lucide-react"

const NavBar = () => {

    

    return (
        <section className="h-full">
           <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                <SidebarMenuItem>
                   
                   
                        <SidebarMenuButton>
                        Select Workspace
                        <ChevronDown className="ml-auto" />
                        </SidebarMenuButton>
                   
                   
           
                        <span>Acme Inc</span>
                    
                  
              
                </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            </Sidebar>
        </section>
    )
}




export default NavBar