import Children from "../../ts-utils/children";

const Container = ({ children }: { children: Children }) => (
    <main className="container mx-auto py-12 px-3 lg:px-36 min-h-screen">
        {children}
    </main>
)

export default Container;