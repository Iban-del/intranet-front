import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { Home } from "lucide-react"

const Navbar = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <>
      

        <Sidebar>
            <SidebarHeader>
                
            </SidebarHeader>
            <SidebarContent>
            <SidebarMenu>
                <SidebarMenuItem>
                <Home className="mr-2 h-4 w-4" />
                Dashboard
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    </>
  )
}

export default Navbar