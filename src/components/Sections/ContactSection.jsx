import Form from "../form";
import OptimizedImage from "../OptimizedImage";
const contactImg = '/contact.jpg'

export default function ContactSection (){ 
    return (
        <section className="container sm:py-24 py-12 flex sm:flex-row flex-col justify-between gap-8">
            <article className="flex flex-col gap-12">
                <p className="text-accent font-semibold">Get in Touch</p>
                <h1 className="font-semibold text text-4xl">Let Us Know by Sent Your
                 <br /> Message For More Information</h1>
                <OptimizedImage src={contactImg} alt={'contact-image'} className="w-full h-[250px] object-cover rounded-lg sm:hidden inline-block" />
                 <p className="text-textGray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes.</p>

                 <div>
                    <Form />
                </div>   
            </article>

            <OptimizedImage src={contactImg} alt={'contact-image'} className="w-1/2 h-full object-cover rounded-lg sm:inline-block hidden" />
        </section>
    )
}