import withHeader, { WithHeaderProps } from "../with-header/withHeader";

const H2: React.FC<WithHeaderProps> = ({ className }) => (
    <h2 className={className}>
        Customers comments
    </h2>
);

const HeaderElement = withHeader(H2);

const Opinions = () => (
    <section className="min-h-96 w-full bg-amber-300 px-24 py-12">
        <HeaderElement />
        <div className="flex flex-wrap ">
            <div className="lg:w-1/3 p-6">
                <p className=" border-4 border-amber-500 p-2 pt-44 pb-24 rounded-t-full text-amber-800 text-2xl text-center whitespace-normal break-words">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum tenetur unde deleniti consequuntur illum delectus ab sequi blanditiis corrupti, in vero sit quod commodi, sapiente sunt minima, quibusdam mollitia quasi! <br /> <span className="font-bold">~ Author</span>
                </p>
            </div>
            <div className="lg:w-1/3 p-6">
                <p className=" border-4 border-amber-500 p-2 pt-44 pb-24 rounded-t-full text-amber-800 text-2xl text-center whitespace-normal break-words">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum tenetur unde deleniti consequuntur illum delectus ab sequi blanditiis corrupti, in vero sit quod commodi, sapiente sunt minima, quibusdam mollitia quasi!<br /> <span className="font-bold">~ Author</span>
                </p>
            </div>
            <div className="lg:w-1/3 p-6">
                <p className=" border-4 border-amber-500 p-2 pt-44 pb-24 rounded-t-full text-amber-800 text-2xl text-center whitespace-normal break-words">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum tenetur unde deleniti consequuntur illum delectus ab sequi blanditiis corrupti, in vero sit quod commodi, sapiente sunt minima, quibusdam mollitia quasi!<br /> <span className="font-bold">~ Author</span>
                </p>
            </div>
        </div>
    </section>
)

export default Opinions;