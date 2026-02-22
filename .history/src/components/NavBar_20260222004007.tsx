import { DropdownMenu } from "radix-ui"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"

const NavBar = () => {
    return (
        <nav
            className="border-b-2 h-full w-screen"
        >
            <Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
       
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</Sidebar>
        </nav>
    )
}



export default NavBar