import type { navbarElementsGroup } from "./components/NavBar";
import { Home, PanelLeft } from 'lucide-react';

export const elementsGroups:navbarElementsGroup[] = [
    {
        title:"Application",
        elements:[
            {
                title:"Home",
                icon:<Home/>,
                href:"/"
            },
            {
                title:"Admin",
                icon:<Home/>,
                href:"/",
                children:[
                    {
                        title:"test",
                        icon:<Home/>,
                        href:"/",
                    }
                ]
            }
        ]
    }
]



export const APP_NAME = "Nexus";
export const LOGO_PATH = "/src/assets/logo-network.png";


