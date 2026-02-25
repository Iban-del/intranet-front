import type { navbarElement, navbarElementsGroup } from "./components/NavBar";
import { Home, PanelLeft } from 'lucide-react';

export const elementsGroups:navbarElementsGroup[] = [
    {
        title:"",
        elements:[
            {
                title:"Home",
                icon:<Home/>,
                href:"/"
            }
        ]
    }
]



export const APP_NAME = "Nexus";
export const LOGO_PATH = "/src/assets/logo-network.png";


