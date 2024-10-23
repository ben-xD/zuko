import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pupils/quiz')({
  component: () => <div>Hello /pupils/Quiz!</div>,
})
