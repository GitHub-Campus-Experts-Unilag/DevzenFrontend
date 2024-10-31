import { useLocation, NavLink } from "react-router-dom"

import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar
} from "@/components/ui/sidebar";

interface SidebarMainContentProps {
  title: string,
  url: string,
  imgSrc: string,
  isActive?: boolean,
  items?: {
    title: string,
    url: string
  }[]
}

const SidebarMainContent = ({ items }: { items: SidebarMainContentProps[] }) => {

  const location = useLocation();
  console.log(location);

  const { open } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={true}
            className="group/collapsible"
          >
            <SidebarMenuItem >
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} className="text-gray-30 font-semibold mb-2.5">
                  {item.imgSrc &&
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className={`w-8 h-8 ${open ? "scale-[0.6]": ""}`}
                    />
                  }
                  <span className="text-[1.0625rem] whitespace-nowrap">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="text-black-50 text-base font-medium border-l-0 pl-6">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <NavLink
                          to={`/dashboard/${item.url}/${subItem.url}`}
                          className="p-4 hover:bg-gray-90/40 hover:text-black-20 [&.active]:bg-green-90 [&.active]:text-black-20 [&.active]:border [&.active]:border-green-70 [&.active]:shadow-[0_0_0_2px_#06596540]"
                        >
                          <span>{subItem.title}</span>
                        </NavLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default SidebarMainContent;