import withHeader, { WithHeaderProps } from "../with-header/withHeader";
import { useGetImagesQuery } from "../../api/apiSlice";
import { useOpenSpecificImage } from "../main-image/openSpecificImage";

const H2: React.FC<WithHeaderProps> = ({ className }) => (
    <h2 className={className}>
        Photographers
    </h2>
);

const HeaderElement = withHeader(H2);


const Authors = () => {
    const { data: images } = useGetImagesQuery();
    const openImage = useOpenSpecificImage();

    return (
        <section className="min-h-96 w-ful px-24 py-12">
            <HeaderElement />
            <div className="flex flex-wrap -mx-4">
                {
                    images?.map((image, index) => <div key={image.id} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                        <button className="bg-white rounded shadow hover:cursor-pointer" type="button" onClick={() => openImage(index)}>
                            <img src={image.download_url} alt="Author 1" className="w-full h-48 object-cover rounded-t" />
                            <div className="p-4">
                                <p className="text-center text-gray-700">{image.author}</p>
                            </div>
                        </button>
                    </div>)
                }
            </div>
        </section>
    )

}
export default Authors;