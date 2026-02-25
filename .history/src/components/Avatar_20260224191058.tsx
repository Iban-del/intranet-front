
export interface avatarProps{
    src:string
}

const Avatar = ({
    src
}:avatarProps) => {

    return (
        <img
            src={src}
            className="rounded-4xl"
        >

        </img>
    );
}