import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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
        window.location.pathname = "/"
    }

    return (
        <form className="w-full flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
            <h2>
                ◆ sdsd
            </h2>
            <FieldSet className="w-full max-w-xs">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="username">Username</FieldLabel>
                        <Input {...register("username")} id="username" type="text" placeholder="Max Leiter" />
                        <FieldDescription>
                            Choose a unique username for your account.
                        </FieldDescription>
                        <FieldError>
                            {errors.username?.message}
                        </FieldError>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <FieldDescription>
                            Must be at least 8 characters long.
                        </FieldDescription>
                        <Input {...register("password")} id="password" type="password" />
                        <FieldError>
                            {errors.username?.message}
                        </FieldError>
                    </Field>
                    <Field>
                        <Input id="submit" type="submit"/>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </form>
    )
}

export default LoginForm;