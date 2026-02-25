import * as z from "zod"; 

const Login = z.object({
    username:z.string().min(1, { message: "L'identifiant est obligatoire" }),
    password:z.string().min(1, { message: "Le mot de passe est obligatoire" })
}) 

const useAuth = () =>{

    

    return {
        Login
    }
}

export default useAuth