import { useGetImagesQuery } from "../../api/apiSlice";
import { useSetCurrentImage } from "../../api/helpers";

export const useOpenSpecificImage = () => {
    const { data: images } = useGetImagesQuery();
    const setImage = useSetCurrentImage();

    const openImage = (index: number) => images && setImage(images[index].id);

    return openImage;
}