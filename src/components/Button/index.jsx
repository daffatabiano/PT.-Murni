export default function Button ({text,variant = "accent", ...props}) {
    return (
        <button className={`w-full px-4 py-2 rounded bg-${variant} ${variant === "accent" && "hover:bg-transparent hover:border-1 hover:border-white"} ${variant === "border" && `border-1  border-white bg-transparent hover:bg-accent hover:border-none`}`} {...props} >{text}</button>
    )
}