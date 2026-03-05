import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/section')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className=''>

  </div>
}
