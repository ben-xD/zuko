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

const data = {
  navMain: [
    {
      title: "Pre-exclusion",
      url: "/teachers/pre-exclusion",
      items: [
        {
          title: "Remediation strategies",
          url: "/teachers/pre-exclusion/remediation-strategies",
        },
      ],
    },
    {
      title: "Exclusion",
      url: "/teachers/exclusion",
      items: [
        {
          title: "Parents letter",
          url: "/teachers/exclusion/parents-letter",
        },
        {
          title: "Quiz library",
          url: "/teachers/exclusion/quiz",
        },
        {
          title: "Send to student / parents",
          url: "/teachers/exclusion/send",
        },
        {
          title: "Parents support",
          url: "/teachers/exclusion/parents-support",
        },
        {
          title: "Assessments",
          url: "/teachers/exclusion/completed",
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
        },
        {
          title: "Report",
          url: "/teachers/post-exclusion/report",
        },
      ]
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="uppercase text-center mt-1 text-xl">Zuko</h1>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
