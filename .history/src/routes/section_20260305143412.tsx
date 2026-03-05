import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/section')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='w-full h-full grid grid-cols-1'>
    <Button>
      Hello world
    </Button>
    <
  </div>
}
