import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/teachers/exclusion/remediation-story',
)({
  component: Page,
})

function Page() {
  return <div className="p-2">Hello /teachers/exclusion/remediation-story!</div>
}
