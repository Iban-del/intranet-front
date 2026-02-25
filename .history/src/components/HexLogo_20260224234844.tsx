
export interface hexLogoProps{
    size?:number,
    className?:string
}

const HexLogo = ({
    size=120,
    className = ""
}:hexLogoProps) => (
    <div className={"relative w-["+size+"px] h-["+size+"px] flex items-center justify-center "+className}>
        <svg viewBox="0 0 120 120" fill="none" className="absolute inset-0 w-full h-full">
            <polygon
                points="60,4 112,32 112,88 60,116 8,88 8,32"
                fill="rgba(13,27,53,0.8)"
                stroke="#c89b3c"
                strokeWidth="1.5"
            />
            <polygon
                points="60,16 100,38 100,82 60,104 20,82 20,38"
                fill="none"
                stroke="rgba(200,155,60,0.25)"
                strokeWidth="0.7"
            />
            <circle cx="60"  cy="4"   r="2.5" fill="#c89b3c" />
            <circle cx="112" cy="32"  r="2.5" fill="#c89b3c" />
            <circle cx="112" cy="88"  r="2.5" fill="#c89b3c" />
            <circle cx="60"  cy="116" r="2.5" fill="#c89b3c" />
            <circle cx="8"   cy="88"  r="2.5" fill="#c89b3c" />
            <circle cx="8"   cy="32"  r="2.5" fill="#c89b3c" />
        </svg>

        <div className="relative z-10 flex flex-col items-center gap-1">
            <span className="text-2xl animate-pulse">⚜</span>
        </div>
    </div>
)

export default HexLogo