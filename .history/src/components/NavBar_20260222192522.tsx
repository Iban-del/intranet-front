import { APP_NAME, LOGO_PATH } from "@/config";


const w:string = "w-72";

const NavBar = () => {


    return (
        <aside className={"h-screen border-r-2 bg-foreground relative flex flex-col justify-around"}>
            <div className={"flex-2 flex  justify-center flex-col items-center "+w}>
                <img src={LOGO_PATH} alt="Logo" className="w-2.5" />
                <h1 className="text-2xl">{APP_NAME}</h1>
                <p className="text-sm">Portail Intranet</p>
            </div>  
            <hr/>
            <nav className={"flex-10 "+w}>

            </nav>
            <hr/>
            <div className={"flex-1 "+w}>
                
            </div>
        </aside>
    )
}

export default NavBar