import { Link } from "react-router-dom";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";


import userAvatar from "@/assets/images/avatar-1.png";
import feedbackIcon from "@/assets/icons/sms-edit.svg";

const SidebarFooterContent = () => {

  const { open } = useSidebar();

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={userAvatar} alt="" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span>Dylan Ray</span>
            </div>
          </SidebarMenuButton>
          <Link
            to="/feedback"
            className={open ? "flex items-center gap-2" : "hidden"}
          >
            <span className="underline underline-offset-2">Send feedback</span>
            <img src={feedbackIcon} alt="" />
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  )
}

export default SidebarFooterContent;