import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"

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