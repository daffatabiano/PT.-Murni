import { useState } from "react"

export default function Subscription () {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("")
    
    return(
        <section className="bg-[#FAFAFA]">
            <div className="container py-6 flex sm:flex-row flex-col justify-between gap-6 items-center">
                <h1 className="font-semibold text text-4xl">Subscribe to Our Newsletter</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail Address" className={`px-6 py-4 w-full bg-transparent rounded-lg ${errors ? "border-red-500" : "border-textGray"} border-[1px] focus:border-none`} name="email" />
                    {errors && <p className="text-red-500 text-sm sm:hidden inline-block">{errors}</p>}
                    <button onClick={(e) => {
                        e.preventDefault();
                         if(!email){
                            setErrors("Email Should be filled")
                        } else if (!/\S+@\S+\.\S+/.test(email)) {
                            setErrors("Please Input Correct Email")
                        } else {
                            alert(`Thank you for subscribe ${email.split("@")[0]}`)
                            return;
                        }

                    }} className={`w-full px-4 py-2 rounded bg-accent text-white`} type="button" >Subscribe</button>
                </div>
            </div>
                    {errors && <p className="text-red-500 text-sm sm:inline-block hidden translate-x-200 -translate-y-6">{errors}</p>}
        </section>
    )
}