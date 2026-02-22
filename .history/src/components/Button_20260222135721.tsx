import { SidebarTrigger } from "@/components/ui/sidebar"
import { Bell, Search, Settings } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Header = () => {
    return (
        <header
            className="h-16 flex items-center px-6 gap-4 sticky top-0 z-10 border-b"
            style={{
                background: "oklch(0.075 0.022 290 / 0.85)",
                backdropFilter: "blur(12px)",
                borderColor: "oklch(0.46 0.22 293 / 0.25)",
            }}
        >
            {/* Trigger */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <SidebarTrigger className="text-muted-foreground hover:text-primary hover:bg-sidebar-accent transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Ouvrir / fermer</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <Separator orientation="vertical" className="h-5 opacity-30" />

            {/* Titre */}
            <h2
                className="text-sm font-bold tracking-[0.14em] uppercase"
                style={{
                    fontFamily: "'Cinzel', serif",
                    color: "oklch(0.72 0.155 78)",
                }}
            >
                Intranet
            </h2>

            <div className="flex-1" />

            {/* Search */}
            <div className="relative hidden sm:block">
                <Search
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground"
                />
                <Input
                    placeholder="Rechercher…"
                    className="pl-8 h-8 w-48 text-[13px] rounded-lg"
                    style={{
                        background: "oklch(0.46 0.22 293 / 0.10)",
                        borderColor: "oklch(0.46 0.22 293 / 0.25)",
                        fontFamily: "'Raleway', sans-serif",
                    }}
                />
            </div>

            {/* Notif */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="relative h-8 w-8 hover:border-primary hover:bg-sidebar-accent hover:text-primary transition-all"
                            style={{ borderColor: "oklch(0.46 0.22 293 / 0.25)", background: "transparent" }}
                        >
                            <Bell size={15} />
                            <span
                                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full border border-background"
                                style={{ background: "oklch(0.72 0.155 78)" }}
                            />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom"><p>Notifications</p></TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Settings */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 hover:border-primary hover:bg-sidebar-accent hover:text-primary transition-all"
                            style={{ borderColor: "oklch(0.46 0.22 293 / 0.25)", background: "transparent" }}
                        >
                            <Settings size={15} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom"><p>Paramètres</p></TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <Separator orientation="vertical" className="h-5 opacity-30" />

            {/* Avatar dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2.5 h-9 px-2 rounded-lg hover:bg-sidebar-accent transition-all"
                    >
                        <Avatar
                            className="w-7 h-7 border-2"
                            style={{ borderColor: "oklch(0.72 0.155 78 / 0.5)" }}
                        >
                            <AvatarFallback
                                className="text-[11px] font-bold"
                                style={{
                                    fontFamily: "'Cinzel', serif",
                                    background: "linear-gradient(135deg, #7c3aed, #d4a017)",
                                    color: "#fff",
                                }}
                            >
                                MA
                            </AvatarFallback>
                        </Avatar>

                        <div className="hidden md:flex flex-col items-start leading-none">
                            <span
                                className="text-[12px] font-semibold"
                                style={{ color: "oklch(0.925 0.018 78)" }}
                            >
                                Marc Antoine
                            </span>
                            <span
                                className="text-[10px]"
                                style={{ color: "oklch(0.52 0.032 290)" }}
                            >
                                Administrateur
                            </span>
                        </div>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    className="w-48 border"
                    style={{
                        background: "oklch(0.11 0.032 290)",
                        borderColor: "oklch(0.46 0.22 293 / 0.25)",
                    }}
                >
                    <DropdownMenuLabel
                        className="text-[11px]"
                        style={{ color: "oklch(0.52 0.032 290)" }}
                    >
                        Mon compte
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator style={{ background: "oklch(0.46 0.22 293 / 0.2)" }} />
                    <DropdownMenuItem className="text-[13px] cursor-pointer gap-2">
                        <Settings size={13} />
                        Paramètres
                    </DropdownMenuItem>
                    <DropdownMenuSeparator style={{ background: "oklch(0.46 0.22 293 / 0.2)" }} />
                    <DropdownMenuItem
                        className="text-[13px] cursor-pointer gap-2"
                        style={{ color: "oklch(0.58 0.21 15)" }}
                    >
                        Se déconnecter
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

export default Header