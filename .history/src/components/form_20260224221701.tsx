import * as z from "zod"; 
import { useForm, type FieldValues, type Resolver } from "react-hook-form"

export interface formProps {
    schema:Resolver<FieldValues, any, FieldValues>,
    title:string,
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

    } = useForm({
        resolver:schema
    })

    return (
        <form>
            {children}
        </form>
    )
}

export const Field = () => {

}

export default Form