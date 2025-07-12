import { FaCheck } from "react-icons/fa"
import { iconMap } from "../../utils/constants"
import OptimizedImage from "../OptimizedImage"

const SumInfo = (props) => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-2">
                <i className="text-3xl text-accent font-bold">{iconMap[props.icon]}</i> <h1 className="text-3xl font-bold text-primary">{props.title}</h1>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

const Content = ({img, subtitle, title, title2, reverse, children}) => {
    return (
           <div className={`flex justify-between sm:flex-row flex-col gap-12 sm:h-[450px] py-8 sm:py-0 ${reverse && "sm:flex-row-reverse"}`}>
                    <OptimizedImage src={img} alt={subtitle} className="sm:w-1/2 rounded h-[350px] object-cover" />

                    <div className="flex flex-col gap-6 sm:w-1/2">
                        <p className="text-accent font-semibold">{subtitle}</p>
                        <h1 className="font-semibold text-primary text-4xl">{title} <br /> {title2}</h1>
                        <article className="text-textGray">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes.</p>
                            <div className="pt-6">
                                {children}
                            </div>
                        </article>
                    </div>
                </div>
    )
}

export default function AboutSection() {
    return (
        <section className="sm:pt-8 pt-38 z-10 w-full ">
            <div className="container pb-12 sm:pb-0">
                <div className="flex sm:gap-14 gap-12 sm:pb-32 pb-12 justify-center sm:justify-start">
                    <SumInfo icon="pinned" title="4.500" text="Our Square Feets" />
                    <SumInfo icon="star" title="5.00" text="Rates by 1.100" />
                </div>
                <Content img={'/about/about1.jpg'} subtitle="About Us" title="Discover an Extraordinary" title2="Property With Us">
                        <blockquote className="border-l-4 border-gray-400 italic text-gray-600 pl-4 bg-gray-200/10">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</blockquote>
                </Content>
                <Content img={'/about/about2.jpg'} reverse subtitle="Provide" title="We Provide Many Features" title2="and Property Benefits">
                    <ul className="flex flex-col gap-4">
                        {Array.from({length : 3 }).map((_,i) => (
                            <li key={i} className="flex gap-4 items-center">
                                <FaCheck />
                                <p>Lorem ipsum dolor sit amet, consectetuer</p>
                            </li>
                        ))}
                    </ul>
                </Content>
            </div>
        </section>
    )
}