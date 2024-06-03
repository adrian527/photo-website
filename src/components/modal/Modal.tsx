import { useGetImagesQuery } from "../../api/apiSlice";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useClearCurrentImage, useGetCurrentImage, useSetCurrentImage } from "../../api/helpers";
import { useCallback, useEffect } from "react";

const Modal = () => {
    const { data: images } = useGetImagesQuery();
    const currentImage = useGetCurrentImage();
    const close = useClearCurrentImage();
    const setImage = useSetCurrentImage();

    const change = useCallback((val: number) => {
        if (images) {
            const currentIndex = images?.findIndex(element => element.id === currentImage) + val;
            const newIndex = currentIndex >= images?.length ? 0 : currentIndex < 0 ? images?.length - 1 : currentIndex;
            setImage(images[newIndex].id);
        }
    }, [currentImage, images, setImage])

    const next = useCallback(() => change(1), [change]);
    const previous = useCallback(() => change(-1), [change]);

    useEffect(() => {
        function handler(evt: KeyboardEvent) {
            if (evt.key === 'Escape') {
                close()
            } else if (evt.key === 'ArrowLeft') {
                previous();
            } else if (evt.key === 'ArrowRight') {
                next();
            }
        }
        window.addEventListener('keydown', handler);

        return () => window.removeEventListener('keydown', handler);

    }, [close, previous, next]);

    return (
        !!currentImage ?
            <div role="dialog" id="modal" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                <div className="shadow-lg w-full h-screen p-4 lg:p-12 flex flex-col">
                    <div className=" bg-amber-200 flex-grow overflow-hidden rounded-t-3xl">
                        <img className="w-full h-full object-cover" src={images && images.find(el => el.id === currentImage)?.download_url} alt="Description" />
                    </div>
                    <div className="bg-amber-300 h-24 flex rounded-b-3xl">
                        <div className="w-1/3 h-full pl-2 lg:pl-10 flex items-center">
                            <button className="uppercase text-sm text-amber-900 hover:underline flex items-center" onClick={previous}>
                                <ChevronLeftIcon className="w-6 h-6 text-amber-900 mt-0.5" />
                                Previous
                            </button>
                        </div>
                        <div className="w-1/3 h-full flex items-center justify-center">
                            <button className="uppercase text-sm text-amber-900 hover:underline" type="button" onClick={close}>
                                Close
                            </button>
                        </div>
                        <div className="w-1/3 h-full text-right pr-2 lg:pr-10 flex items-center justify-end">
                            <button className="uppercase text-sm text-amber-900 hover:underline flex items-center" onClick={next}>
                                Next
                                <ChevronRightIcon className="w-6 h-6 text-amber-900 mt-0.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div> : null
    )
}

export default Modal;