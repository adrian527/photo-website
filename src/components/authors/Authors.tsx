import withHeader, { WithHeaderProps } from "../with-header/withHeader";

const H2: React.FC<WithHeaderProps> = ({ className }) => (
    <h2 className={className}>
        Photographers
    </h2>
);

const HeaderElement = withHeader(H2);


const Authors = () => (
    <section className="min-h-96 w-ful px-24 py-12">
        <HeaderElement />
        <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 1" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 1</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 2" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 2</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 3" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 3</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
                <div className="bg-white rounded shadow">
                    <img src="https://picsum.photos/id/20/3670/2462" alt="Author 4" className="w-full h-48 object-cover rounded-t" />
                    <div className="p-4">
                        <p className="text-center text-gray-700">Description for Image 4</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Authors;