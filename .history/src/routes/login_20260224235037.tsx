
import HexLogo from '@/components/HexLogo'
import LoginForm from '@/components/pages/auth/loginForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-screen h-screen flex justify-evenly items-center'>
      <div className='w-96'>
          <HexLogo/>
          <h2>Nexus</h2>
      </div>
      <div className='bg-foreground w-96 p-10 border-2'>
        <LoginForm/>
      </div>
    </div>
  )
}
