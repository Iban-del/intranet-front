import * as z from "zod"; 
import { useForm, type FieldValues, type Resolver } from "react-hook-form"

export interface formProps {
    schema:Resolver<FieldValues, any, FieldValues>,
    title:string,
    onSubmit:(data:any)=>void
    fields:field[]
}

export interface field {

}



const Form = ({
    schema,
    title,
    onSubmit,
    field
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
            {field.map((el)=>(
                
            ))}
        </form>
    )
}

export default Form