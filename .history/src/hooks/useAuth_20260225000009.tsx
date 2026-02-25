import * as z from "zod"; 

const Login = z.object({
    username:z.string().check((e)=>e!=""),
    password:z.string()
}) 

const useAuth = () =>{

    

    return {
        Login
    }
}

export default useAuth