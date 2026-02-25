import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { Home } from "lucide-react"

const Navbar = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <>
      <button onClick={toggleSidebar}>Toggle</button>

      <Sidebar>
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