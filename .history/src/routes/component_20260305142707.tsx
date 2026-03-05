
export const Route = createFileRoute('/')({
  component: Index,
})

function RouteComponent() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='border-8'>
        <div className='bg-foreground w-96 p-10 border-2 m-15'>
          <LoginForm/>
        </div>
      </div>
      
    </div>
  )
}