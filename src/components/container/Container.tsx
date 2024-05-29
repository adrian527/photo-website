import Children from "../../ts-utils/children";

const Container = ({ children }: { children: Children }) => (
    <div className="container mx-auto py-12 px-6 lg:px-36">
        {children}
    </div>
)

export default Container;