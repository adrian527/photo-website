export type WithHeaderProps = {
    className?: string;
};

function withHeader<P extends WithHeaderProps>(Component: React.ComponentType<P>) {
    const EnhancedHeader: React.FC<Omit<P, 'className'>> = (props) => {
        const className = "mb-12 py-6 border-b-2 border-b-amber-500 text-amber-800 text-4xl text-pretty uppercase text-center lg:text-left";
        return <Component className={className} {...(props as P)} />;
    };

    return EnhancedHeader;
}

export default withHeader;