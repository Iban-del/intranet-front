import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='w-full h-full grid grid-cols-3'>
      
    </div>
  )
}