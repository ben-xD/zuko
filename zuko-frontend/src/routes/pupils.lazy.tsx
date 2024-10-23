import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pupils')({
  component: () => <div>Hello /pupils!</div>,
})
