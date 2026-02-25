
import HexLogo from '@/components/HexLogo'
import LoginForm from '@/components/pages/auth/loginForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='m-15 flex flex-col justify-center items-cente'>
          <HexLogo/>
          <h2 className='text-5xl'>
            Nexus
          </h2>
      </div>
      <div className='bg-foreground w-96 p-10 border-2 m-15'>
        <LoginForm/>
      </div>
    </div>
  )
}
