import * as z from "zod"; 

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


    return (
        <form>
            {children}
        </form>
    )
}

export const Field = () => {

}

export default Form