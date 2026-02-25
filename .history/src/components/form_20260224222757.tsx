import * as z from "zod"; 
import { useForm, type FieldValues, type Resolver } from "react-hook-form"

export interface formProps {
    schema:Resolver<FieldValues, any, FieldValues>,
    title:string,
    onSubmit:(data:any)=>void
    field:field
}

export interface field {

}

interface fieldProps {

}

const Form = ({
    schema,
    title,
    onSubmit,
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
        <form onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    )
}

const Field = () => {

}

export default Form