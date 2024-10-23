import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/teachers/exclusion/quiz/create')({
  component: Page,
})

function Page() {
  return <div>Create-quiz</div>
}