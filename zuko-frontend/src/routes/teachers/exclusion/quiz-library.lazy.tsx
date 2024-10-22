import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/teachers/exclusion/quiz-library')({
  component: () => <div>Hello /teachers/exclusion/quiz-library!</div>,
})
