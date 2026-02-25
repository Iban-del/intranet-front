import LoginForm from '@/components/pages/auth/loginform'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-screen h-screen flex justify-center'>
      <LoginForm/>
    </div>
  )
}
