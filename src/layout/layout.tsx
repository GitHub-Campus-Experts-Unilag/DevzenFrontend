import { Outlet } from "react-router-dom"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { AppSidebar } from "../layout/app-sidebar"

export default function Layout() {

  return (
    <SidebarProvider className="flex">
      <AppSidebar />
      <main className="w-full bg-black-90 pt-4">
        <SidebarTrigger className="bg-black-40/15 fixed top-0 md:hidden" /> 

        <Outlet />
      </main>
    </SidebarProvider>
  )
}