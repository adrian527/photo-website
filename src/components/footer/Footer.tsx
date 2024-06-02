import withHeader, { WithHeaderProps } from "../with-header/withHeader";

const H2: React.FC<WithHeaderProps> = ({ className }) => (
    <h2 className={className}>
        Contact
    </h2>
);

const HeaderElement = withHeader(H2);

const Footer = () => (
    <footer className="min-h-96 w-full pr-0 lg:pr-24 pt-16 pb-14">
        <div className="px-24 pb-6">
            <HeaderElement />
        </div>
        <div className="flex flex-wrap">
            <div className="lg:w-3/5 mb-12 lg:mb-0">
                <img className=" w-full h-full object-cover" src="https://picsum.photos/id/50/4608/3072" alt="Description" />
            </div>
            <div className="lg:w-2/5 pl-12">
                <h3 className="text-amber-900 uppercase text-4xl mb-5">
                    Phone
                </h3>
                <p className="text-amber-600 uppercase text-3xl mb-9">
                    123 123 123
                </p>
                <h3 className="text-amber-900 uppercase text-4xl mb-5">
                    Email
                </h3>
                <p className="text-amber-600 uppercase text-3xl mb-9">
                    test@test.com
                </p>
                <h3 className="text-amber-900 uppercase text-4xl mb-5">
                    Address
                </h3>
                <p className="text-amber-600 uppercase text-3xl mb-6">
                    Test address, test.
                </p>
            </div>
        </div>
    </footer>
)

export default Footer;