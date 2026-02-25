import * as z from "zod"; 
import { useForm } from "react-hook-form"

export interface formProps {
    schema:z.ZodObject,
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

    } = useForm

    return (
        <form>
            {children}
        </form>
    )
}

export const Field = () => {

}

export default Form