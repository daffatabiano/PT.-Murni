const Article = ({title}) => (
    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-bold">{title}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</p>
                    </div>
)

const YoutubeEmbed = () => {
  return (
    <div className="aspect-video w-full h-92 rounded-lg">
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default function OverviewSection () {
    return (
        <section className="bg-primary w-full h-full text-white" >
            <div className="container py-24">
                <article className="flex sm:flex-row flex-col justify-between items-center">
                    <div className="flex flex-col gap-4 sm:w-1/2 w-full">
                        <p>Overview</p>
                        <h1 className="font-semibold text-white text-4xl">
                            See Our Property Benefits
                            <br />
                            by Preview Video Below
                        </h1>
                    </div>
                    <p className="sm:w-1/2 w-full pt-6 sm:pt-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes.</p>
                </article>
                
                <div className="py-8">
                    <YoutubeEmbed />
                </div>

                <article className="flex sm:flex-row flex-col justify-between items-center sm:gap-24 gap-8">
                    <Article title="Awesome Features"/>
                    <Article title="Luxury Property"/>
                </article>
            </div>
        </section>
    )
}