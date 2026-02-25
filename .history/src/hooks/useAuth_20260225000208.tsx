import * as z from "zod"; 

const Login = z.object({
    username:z.string().min(1, { message: "L'identifiant est obligatoire" }),
    password:z.string().min(1, { message: "Le mot de passe est obligatoire" }).min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
}) 

const useAuth = () =>{

    

    return {
        Login
    }
}

export default useAuth