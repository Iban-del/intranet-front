import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "./ui/sidebar"

import {
    LayoutDashboard,
    MessageSquare,
    FolderKanban,
    FileText,
    Users,
    BarChart3,
    CalendarDays,
    Settings,
    LogOut,
    Bell,
    ChevronUp,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

import { Avatar, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"



const navMain = [
    {
        label: "Tableau de bord",
        icon: LayoutDashboard,
        href: "/",
        active: true,
    },
    {
        label: "Messagerie",
        icon: MessageSquare,
        href: "/messages",
        badge: 4,
    },
    {
        label: "Projets",
        icon: FolderKanban,
        href: "/projects",
    },
    {
        label: "Documents",
        icon: FileText,
        href: "/documents",
        badge: 2,
        badgeGold: true,
    },
]

const navManagement = [
    {
        label: "Ressources humaines",
        icon: Users,
        href: "/rh",
    },
    {
        label: "Finances",
        icon: BarChart3,
        href: "/finance",
    },
    {
        label: "Planification",
        icon: CalendarDays,
        href: "/planning",
    },
]

// ─── Component ──────────────────────────────────────────────────────────────

const NavBar = () => {
    return (
        <></>
    )
}

export default NavBar