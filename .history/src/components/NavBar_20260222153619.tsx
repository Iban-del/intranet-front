

const w:string = "w-60";

const NavBar = () => {


    return (
        <aside className={"h-screen border-r-2 bg-foreground relative flex flex-col justify-around"}>
            <div className={"flex-1 flex justify-around flex-col "+w}>
                <img src="" alt="Logo" />
                <div>
                    <h1>Nexus Corp</h1>
                    <p>Portail Intranet</p>
                </div>
            </div>  
            <hr/>
            <nav className={"flex-7 "+w}>

            </nav>
            <hr/>
            <div className={"flex-1 "+w}>
                
            </div>
        </aside>
    )
}

export default NavBar