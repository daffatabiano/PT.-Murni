import { iconMap } from "../../utils/constants";
import { FaArrowRight } from "react-icons/fa";

export default function Card ({icon, title}) {
    return (
        <article className="group ">
            <div className="bg-white flex flex-col justify-center sm:justify-start rounded-lg sm:p-6 p-2 py-6 sm:py-6 w-full border border-textGray transition-shadow transition-shadow group-hover:shadow-[0px_4px_16px_rgba(0,_0,_0,_0.03)] group-hover:shadow-primary">
                <header className="p-4 w-16 h-16 justify-center mx-auto sm:mx-0 items-center flex text-xl rounded-full border border-textGray text-accent group-hover:bg-accent group-hover:text-white group-hover:border-none">
                    {iconMap[icon]}
                </header>

                <section className="flex flex-col sm:gap-4 gap-2 sm:pt-4 pt-2 text-center sm:text-start">
                    <h1 className="font-bold text-lg group-hover:text-accent">{title}</h1>
                    <p className="sm:text-base text-sm text-textGray">Lorem ipsum dolor sit <br /> amet, consectetuer.</p>
                    <p className="text-accent font-bold">
                        <FaArrowRight className="inline-block group-hover:animate-bounce-right transition-transform" />
                    </p>
                </section>
            </div>
        </article>
    )
}