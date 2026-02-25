import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form"


const LoginForm = () =>{

    const { Login } = useAuth();

    const onSubmit = (data:any) => {

    }

    return (
        <form >

        </form>
    )
}

export default LoginForm;