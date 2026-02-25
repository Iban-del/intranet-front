import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () =>{

    const { Login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(),
    })


    const onSubmit = (data:any) => {

    }

    return (
        <form >

        </form>
    )
}

export default LoginForm;