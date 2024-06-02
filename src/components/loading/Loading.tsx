import { useGetImagesQuery } from "../../api/apiSlice";
import ErrorPage from "../error/ErrorPage";
import LoadingSpinner from "./LoadingSpinner";

const Loading = ({ children }: { children: JSX.Element }) => {
    const { isLoading, isError } = useGetImagesQuery();

    if (isError) {
        return <ErrorPage />
    }

    return isLoading ? <LoadingSpinner /> : children;
}

export default Loading;