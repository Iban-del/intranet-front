import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
        <section
            className=''
        >
          <h1>
            Network Informatique
          </h1>
        </section>
    </div>
  )
}