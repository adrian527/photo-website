import { useOpenSpecificImage } from "../main-image/openSpecificImage";

const MainButton = () => {
    const openMainImage = useOpenSpecificImage();

    return (
        <div className="flex justify-center">
            <button className="mt-12 border border-amber-800 text-amber-700 text-lg px-4 py-2 rounded-md hover:bg-amber-100 hover:text-amber-900 transition duration-300 ease-in-out animate-slide-up" type="button" onClick={() => openMainImage(0)}>Open Image Gallery</button>
        </div>
    )
}

export default MainButton;