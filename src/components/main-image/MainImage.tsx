const MainImage = () => (
    <section className="flex flex-wrap min-h-60">
        <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="w-full min-h-60">
                <div className="w-96 lg:w-auto h-96 bg-amber-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="animate-spin h-12 w-12 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.113 0-3.87-.81-5.268-2.209l1.732-1.732zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-4.418-3.582-8-8-8v4c2.113 0 3.87.81 5.268 2.209l-1.732 1.732z"></path>
                        </svg>
                    </div>
                    <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://picsum.photos/id/0/5000/3333" alt="" aria-hidden="true" />
                </div>
            </div>
        </div>
        <div className="lg:w-1/2 p-6 pt-0 pb-14 lg:pb-6 order-1 lg:order-2">
            <p className="uppercase text-8xl lg:text-9xl text-amber-800">
                Your Home Design
            </p>
        </div>
    </section>
)

export default MainImage;