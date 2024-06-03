import { useGetImagesQuery } from "../../api/apiSlice";
import { useOpenSpecificImage } from "../main-image/openSpecificImage";

const AboutUs = () => {
    const { data: images } = useGetImagesQuery();
    const openSecondImage = useOpenSpecificImage();
    const openThirdImage = useOpenSpecificImage();

    return (
        <section className="min-h-96 w-full bg-amber-300 flex flex-wrap px-6 lg:px-24 py-12">
            <div className="lg:w-1/2 p-6">
                <h2 className="uppercase text-8xl lg:text-9xl text-amber-800">About Us</h2>
                <p className=" text-xl text-amber-900 mt-20">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis obcaecati perferendis, quisquam porro eveniet suscipit magnam odit, inventore ipsam repellat molestiae. Ea odio amet animi sapiente aut repellendus voluptates.
                </p>
                <p className=" text-xl text-amber-900 mt-12">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis obcaecati perferendis, quisquam porro eveniet suscipit magnam odit, inventore ipsam repellat molestiae. Ea odio amet animi sapiente aut repellendus voluptates.
                </p>
                <p className=" text-xl text-amber-900 mt-12">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis obcaecati perferendis, quisquam porro eveniet suscipit magnam odit, inventore ipsam repellat molestiae. Ea odio amet animi sapiente aut repellendus voluptates.
                </p>
            </div>
            <div className="lg:w-1/2 p-6 pt-16 lg:pt-36 mx-auto">
                <figure className="w-96 lg:w-auto h-96">
                    <img className=" w-full h-full object-cover rounded-2xl hover:cursor-pointer" src={images && images[1].download_url} alt="Description" onClick={() => openSecondImage(1)} />
                    <figcaption className="pt-4 uppercase text-orange-900">{images && images[1].author}</figcaption>
                </figure>
                <figure className="w-96 lg:w-auto h-96 mt-24">
                    <img className=" w-full h-full object-cover rounded-2xl hover:cursor-pointer" src={images && images[2].download_url} alt="Description" onClick={() => openThirdImage(2)} />
                    <figcaption className="pt-4 uppercase text-orange-900">{images && images[2].author}</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default AboutUs;