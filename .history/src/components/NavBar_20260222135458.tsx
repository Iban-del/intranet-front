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
        <Sidebar className="border-r-0">


            <SidebarHeader className="px-4 py-5 border-b overflow-y-hidden border-sidebar-border">
                <div className="flex items-center gap-3">

                    <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 shadow-lg"
                        style={{
                            background: "linear-gradient(135deg, #7c3aed, #d4a017)",
                        }}
                    >
                        ⚜
                    </div>

                    <div className="flex flex-col leading-none">
                        <span
                            className="text-sm font-bold tracking-widest uppercase"
                            style={{
                                fontFamily: "'Cinzel', serif",
                                color: "oklch(0.82 0.12 78)",
                            }}
                        >
                            NEXUS
                        </span>
                        <span
                            className="text-[9px] tracking-[0.22em] uppercase mt-0.5"
                            style={{ color: "oklch(0.52 0.032 290)" }}
                        >
                            Intranet Pro
                        </span>
                    </div>

        
                    <div className="ml-auto relative">
                        <Bell
                            size={16}
                            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        />
                        <span
                            className="absolute -top-1 -right-1 w-2 h-2 rounded-full border border-sidebar"
                            style={{ background: "oklch(0.72 0.155 78)" }}
                        />
                    </div>
                </div>
            </SidebarHeader>

            {/* ── Content ── */}
            <SidebarContent className="px-2 py-3 overflow-y-hidden">

                {/* Principal */}
                <SidebarGroup className="overflow-y-hidden">
                    <SidebarGroupLabel
                        className="text-[9px] tracking-[0.22em] uppercase font-semibold mb-1"
                        style={{ color: "oklch(0.52 0.032 290)" }}
                    >
                        Principal
                    </SidebarGroupLabel>

                    <SidebarMenu>
                        {navMain.map((item) => (
                            <SidebarMenuItem key={item.label}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={item.active}
                                    className="group relative h-9 rounded-lg text-[13px] font-medium transition-all duration-200"
                                    style={
                                        item.active
                                            ? {
                                                background:
                                                    "linear-gradient(90deg, rgba(124,58,237,0.28), rgba(212,160,23,0.10))",
                                                border: "1px solid rgba(212,160,23,0.3)",
                                                color: "oklch(0.82 0.12 78)",
                                            }
                                            : undefined
                                    }
                                >
                                    <a href={item.href} className="flex items-center gap-2.5 px-3">
                                        {/* Active indicator bar */}
                                        {item.active && (
                                            <span
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] rounded-r-full"
                                                style={{ background: "oklch(0.72 0.155 78)" }}
                                            />
                                        )}
                                        <item.icon
                                            size={15}
                                            className="flex-shrink-0"
                                            style={
                                                item.active
                                                    ? { color: "oklch(0.82 0.12 78)" }
                                                    : { color: "oklch(0.52 0.032 290)" }
                                            }
                                        />
                                        <span>{item.label}</span>
                                    </a>
                                </SidebarMenuButton>

                                {item.badge && (
                                    <SidebarMenuBadge>
                                        <Badge
                                            className="text-[10px] px-1.5 py-0 h-4 font-semibold border-0"
                                            style={
                                                item.badgeGold
                                                    ? {
                                                        background: "oklch(0.72 0.155 78)",
                                                        color: "oklch(0.075 0.022 290)",
                                                    }
                                                    : {
                                                        background: "oklch(0.46 0.22 293)",
                                                        color: "#fff",
                                                    }
                                            }
                                        >
                                            {item.badge}
                                        </Badge>
                                    </SidebarMenuBadge>
                                )}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator className="my-3 opacity-30" />

                {/* Gestion */}
                <SidebarGroup  className="overflow-y-hidden">
                    <SidebarGroupLabel
                        className="text-[9px] tracking-[0.22em] uppercase font-semibold mb-1"
                        style={{ color: "oklch(0.52 0.032 290)" }}
                    >
                        Gestion
                    </SidebarGroupLabel>

                    <SidebarMenu>
                        {navManagement.map((item) => (
                            <SidebarMenuItem key={item.label}>
                                <SidebarMenuButton
                                    asChild
                                    className="h-9 rounded-lg text-[13px] font-medium"
                                >
                                    <a href={item.href} className="flex items-center gap-2.5 px-3">
                                        <item.icon
                                            size={15}
                                            className="shrink-0"
                                            style={{ color: "oklch(0.52 0.032 290)" }}
                                        />
                                        <span>{item.label}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

            </SidebarContent>

            {/* ── Footer / User ── */}
            <SidebarFooter className="border-t border-sidebar-border px-3 py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    className="h-11 rounded-lg px-3 hover:bg-sidebar-accent transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-3 w-full">
                                        <Avatar className="w-7 h-7 flex-shrink-0">
                                            <AvatarFallback
                                                className="text-[11px] font-bold border-0"
                                                style={{
                                                    fontFamily: "'Cinzel', serif",
                                                    background: "linear-gradient(135deg, #7c3aed, #d4a017)",
                                                    color: "#fff",
                                                    borderColor: "rgba(212,160,23,0.4)",
                                                }}
                                            >
                                                MA
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="flex flex-col leading-none flex-1 min-w-0">
                                            <span
                                                className="text-[13px] font-semibold truncate"
                                                style={{ color: "oklch(0.925 0.018 78)" }}
                                            >
                                                Marc Antoine
                                            </span>
                                            <span
                                                className="text-[10px] truncate"
                                                style={{ color: "oklch(0.52 0.032 290)" }}
                                            >
                                                Administrateur
                                            </span>
                                        </div>

                                        <ChevronUp
                                            size={14}
                                            style={{ color: "oklch(0.52 0.032 290)" }}
                                            className="flex-shrink-0"
                                        />
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                side="top"
                                align="start"
                                className="w-52 mb-1 border-sidebar-border"
                                style={{ background: "oklch(0.11 0.032 290)" }}
                            >
                                <DropdownMenuItem className="gap-2 text-[13px] cursor-pointer">
                                    <Settings size={14} />
                                    Paramètres
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="gap-2 text-[13px] cursor-pointer"
                                    style={{ color: "oklch(0.58 0.21 15)" }}
                                >
                                    <LogOut size={14} />
                                    Se déconnecter
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}

export default NavBar