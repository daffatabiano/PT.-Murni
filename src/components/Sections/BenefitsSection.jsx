import { listCards } from "../../utils/constants"
import Card from "../Card"

const title = ["Awesome Features", "Luxurious Interior Design", "Modern Concept"];
const Article = ({title}) => (
    <article className="flex flex-col gap-4">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-textGray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</p>
    </article>
)

export default function BenefitSection () {
 
    return (
        <section className="py-24 container">
            <div className="flex sm:flex-row flex-col-reverse justify-between gap-16">
                <div className="sm:w-1/2 w-full grid grid-cols-2 sm:gap-4 gap-2">
                    {listCards.map((item, i) => (
                        <Card key ={i} {...item} />
                    ))}
                </div>

                <div className="sm:w-1/2 w-full flex flex-col gap-4">
                    <p className="text-accent">Benefits</p>
                    <h1 className="font-semibold text text-4xl">Explore More About <br /> Our Property & Benefits</h1>
                    <p className="text-textGray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa.</p>
                    {title.map(item => <Article key={item} title={item}/>)}
                </div>
            </div>
        </section>
    )
}