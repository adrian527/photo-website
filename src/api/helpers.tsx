import { useDispatch, useSelector } from "react-redux"
import { setCurrentImage, clearCurrentImage } from './imageSlice';
import { RootState } from "./store";

export const useClearCurrentImage = () => {
    const dispatch = useDispatch();

    return () => {
        dispatch(clearCurrentImage());
    }
}

export const useSetCurrentImage = () => {
    const dispatch = useDispatch();

    return (id: string) => {
        dispatch(setCurrentImage(id));
    }
}

export const useGetCurrentImage = () => {
    const currentImage = useSelector((state: RootState) => state.image.currentImage);
    return currentImage;
}