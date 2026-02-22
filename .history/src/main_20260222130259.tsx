import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'


// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { Sidebar, SidebarInset, SidebarProvider } from './components/ui/sidebar'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode> 
      <SidebarProvider
        style={
          {
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "20rem",
          } as React.CSSProperties
        }
      >
        <Sidebar variant="inset">
          <SidebarInset>
            <RouterProvider router={router} />
          </SidebarInset>
        </Sidebar>
      </SidebarProvider>
    </StrictMode>,
  )
}