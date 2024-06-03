import { useGetImagesQuery } from "../../api/apiSlice";
import { useOpenSpecificImage } from "./openSpecificImage";

const MainImage = () => {
    const { data: images } = useGetImagesQuery();
    const openMainImage = useOpenSpecificImage();

    return (
        <section className="flex flex-wrap justify-center min-h-60">
            <div className="lg:w-1/2 order-2 lg:order-1 animate-slide-show">
                <div className="w-full min-h-60">
                    <div className="w-96 lg:w-auto h-96  relative">
                        <img className="absolute top-0 left-0 w-full h-full object-cover hover:cursor-pointer" src={images && images[0].download_url} loading="eager" alt="" onClick={() => openMainImage(0)} />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 p-6 pt-0 pb-14 lg:pb-6 order-1 lg:order-2">
                <h2 className="uppercase text-8xl lg:text-9xl text-amber-800 animate-slide-right text-center lg:text-start">
                    Your Home Design
                </h2>
            </div>
        </section>
    )
}

export default MainImage;