import * as React from "react"

import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"

const data = {
  navMain: [
    {
      title: "Pre-exclusion",
      url: "/teachers/pre-exclusion",
      items: [
        {
          title: "Remediation strategies",
          url: "/teachers/pre-exclusion/remediation-strategies",
          disabled: true,
        },
      ],
    },
    {
      title: "Exclusion",
      url: "/teachers/exclusion",
      items: [
        {
          title: "Suspend student",
          url: "/teachers/exclusion/suspend-student",
        },
        {
          title: "Parents letter",
          url: "/teachers/exclusion/parents-letter",
          disabled: true,
        },
        {
          title: "Remediation story",
          url: "/teachers/exclusion/remediation-story",
        },
        {
          title: "Create quiz",
          url: "/teachers/exclusion/quiz/create",
        },
        {
          title: "Quiz library",
          url: "/teachers/exclusion/quiz/library",
        },
        {
          title: "Student take-home pack",
          url: "/teachers/exclusion/student-take-home-pack",
        },
        {
          title: "Parents support",
          url: "/teachers/exclusion/parents-support",
          disabled: true,
        },
        {
          title: "Assessments",
          url: "/teachers/exclusion/completed",
          disabled: true,
        },
      ],
    },
    {
      title: "Post-exclusion",
      url: "/teachers/post-exclusion",
      items: [
        {
          title: "Parents letter",
          url: "/teachers/post-exclusion/parents-latter",
          disabled: true,
        },
        {
          title: "Report",
          url: "/teachers/post-exclusion/report",
          disabled: true,
        },
      ]
    }
  ],
}

export function AppSidebar({ currentUrl, ...props }: React.ComponentProps<typeof Sidebar> & { currentUrl: string }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="uppercase text-center mt-1 text-xl"><Link to='/'>Zuko</Link></h1>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) =>{
                  const isActive = item.url === currentUrl
                  return (
                    <SidebarMenuItem key={item.title}>
                        <Link disabled={item.disabled} className="[&.active]:font-bold" to={item.url}>
                      <SidebarMenuButton isActive={isActive} disabled={item.disabled}>
                      {item.title}
                      </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
