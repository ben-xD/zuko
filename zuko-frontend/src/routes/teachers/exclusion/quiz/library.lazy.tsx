import { MultipleChoiceQuestion } from '@/quiz/MultipleChoiceQuestion'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/teachers/exclusion/quiz/library')({
  component: Page,
})

function Page() {
  return (
    <div>
      <MultipleChoiceQuestion />
    </div>
  )
}
