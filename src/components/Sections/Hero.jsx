import Button from "../Button";
import Carousel from "../Carousel";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#494949] text-white">
      <div className="container mx-auto flex flex-col pt-10 sm:pt-0 md:flex-row items-center justify-between h-full relative z-10 gap-8">
        <div className="flex flex-col gap-6 md:w-1/3 w-full">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Modern <br /> Single Property
          </h1>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <div className="flex gap-4 sm:flex-row flex-col">
            <Button type="button" variant="accent" text="Overview" />
            <Button type="button" variant="border" text="Learn More" />
          </div>
        </div>

        <div className="md:w-1/2 relative z-20">
          <div className="translate-y-10 md:translate-y-32 w-[90%] mx-auto">
            <Carousel />
          </div>
        </div>
      </div>

    </section>
  );
}
