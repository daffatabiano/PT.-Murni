export default function ButtonIcon ({children}) {
    return (
        <button className="p-2 rounded bg-accent hover:bg-accent/90 text-white sm:hidden block">{children}</button>
    )
}