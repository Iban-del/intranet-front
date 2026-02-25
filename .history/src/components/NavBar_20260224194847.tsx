import { Folder, Home, Settings, Sidebar } from "lucide-react";
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "./ui/sidebar";


const Navbar = ({

}) =>{

    return (
         <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Folder className="mr-2 h-4 w-4" />
                Projects
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
    )

}


export default Navbar;