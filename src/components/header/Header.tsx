import withHeader, { WithHeaderProps } from "../with-header/withHeader";

const H1: React.FC<WithHeaderProps> = ({ className }) => (
    <h1 className={className}>
        Photo Website by Adrian Gzyl
    </h1>
);

const HeaderElement = withHeader(H1);

const Header = () => (
    <header>
        <HeaderElement />
    </header>
)

export default Header;