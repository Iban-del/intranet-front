import LoginForm from '@/components/pages/auth/loginform'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <LoginForm/>
    </div>
  )
}
