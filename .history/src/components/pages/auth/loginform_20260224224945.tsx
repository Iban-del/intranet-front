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
        resolver: zodResolver(Login),
    })


    const onSubmit = (data:any) => {
        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}

export default LoginForm;