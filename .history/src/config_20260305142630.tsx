
import { Box, FolderCode, FolderKanban, Home, PanelLeft, UserStar } from 'lucide-react';
import type { navbarElementsGroup } from './components/NavBar';


export const NAV_EXCLUED = [
    "/login",
]

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
                icon:<UserStar />,
                href:"/admin",
                admin:true
            },
            {
                title:"Component",
                icon:<Compo/>,
                href:"/"
            },
            {
                title:"Projets",
                icon:<FolderKanban />,
                children:[
                    {
                        title:"Développement",
                        icon:<FolderCode />,
                        href:"/projets/dev",
                    },
                    {
                        title:"Mincraft",
                        icon:<Box />,
                        href:"/projets/mincraft",
                    },
                ]
            }
        ]
    },
]



export const APP_NAME = "Nexus";
export const LOGO_PATH = "/src/assets/logo-network.png";


