import * as z from "zod"; 
import { useForm, type FieldValues, type Resolver } from "react-hook-form"

export interface formProps {
    schema:Resolver<FieldValues, any, FieldValues>,
    title:string,
    onSubmit:()=>void
    children:React.ReactNode
}

export interface fieldProps {

}

const Form = ({
    schema,
    title,
    children
}:formProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver:schema
    })

    return (
        <form onSubmit={}>
            {children}
        </form>
    )
}

export const Field = () => {

}

export default Form