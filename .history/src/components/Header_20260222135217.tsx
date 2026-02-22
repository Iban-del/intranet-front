import { SidebarTrigger } from "./ui/sidebar"
import { Bell, Search, Settings } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Input } from "./ui/input"

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

            <SidebarTrigger
                className="text-muted-foreground hover:text-primary transition-colors"
            />

            <div
                className="h-5 w-px"
                style={{ background: "oklch(0.46 0.22 293 / 0.3)" }}
            />


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

    
            <div className="relative hidden sm:block">
                <Search
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "oklch(0.52 0.032 290)" }}
                />
                <Input
                    placeholder="Rechercher…"
                    className="pl-8 h-8 w-48 text-[13px] border rounded-lg bg-transparent focus-visible:ring-1 transition-all"
                    style={{
                        background: "oklch(0.46 0.22 293 / 0.10)",
                        borderColor: "oklch(0.46 0.22 293 / 0.25)",
                        color: "oklch(0.925 0.018 78)",
                        fontFamily: "'Raleway', sans-serif",
                    }}
                />
            </div>

  
            <button
                className="relative w-8 h-8 flex items-center justify-center rounded-lg border transition-all hover:border-primary group"
                style={{ borderColor: "oklch(0.46 0.22 293 / 0.25)" }}
            >
                <Bell
                    size={15}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                />
                <span
                    className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full border border-background"
                    style={{ background: "oklch(0.72 0.155 78)" }}
                />
            </button>


            <button
                className="w-8 h-8 flex items-center justify-center rounded-lg border transition-all hover:border-primary group"
                style={{ borderColor: "oklch(0.46 0.22 293 / 0.25)" }}
            >
                <Settings
                    size={15}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                />
            </button>


            <div
                className="h-5 w-px"
                style={{ background: "oklch(0.46 0.22 293 / 0.3)" }}
            />


            <div className="flex items-center gap-2.5 cursor-pointer group">
                <Avatar
                    className="w-8 h-8 border-2 transition-all group-hover:border-primary"
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
                <div className="hidden md:flex flex-col leading-none">
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
            </div>
        </header>
    )
}

export default Header