import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Logo } from "@/assets/svg"
import { Input } from "@/components/ui/input"

import {
  Sidebar,
  SidebarContent,
  SidebarInput,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="p-6 bg-[#131313] gap-y-2">
      <SidebarHeader className="flex flex-row justify-between">
        <img src={Logo} alt="Build Logo" width={40} height={40}/>
        <SidebarTrigger/>
      </SidebarHeader>

      <SidebarContent>
        <SidebarInput/>
        {/* <Input type="text" placeholder="search...." className="outline-0 bg-[#303030]"/> */}
        {/* <SidebarGroup>
         <SidebarGroupLabel/>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  )
}
