import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form"


const LoginForm = () =>{

    const { Login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodRes,
    })


    const onSubmit = (data:any) => {

    }

    return (
        <form >

        </form>
    )
}

export default LoginForm;