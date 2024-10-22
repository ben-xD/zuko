import { env } from '@/env';
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import React, { Suspense } from 'react';
import {AppSidebar} from '@/components/app-sidebar';
import {Separator} from '@/components/ui/separator';
import {SidebarInset, SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';

const TanStackRouterDevtools =
  import.meta.env.PROD || !env.enableRouterDevtools
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => {
    const router = useRouterState();
    return (
        <>    
          <SidebarProvider>
          <AppSidebar currentUrl={router.location.pathname} />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </header>
            <Outlet/>
          </SidebarInset>
        </SidebarProvider>
    
          <Suspense>
            <TanStackRouterDevtools position={"bottom-right"} />
          </Suspense>
        </>
      )
  },
})