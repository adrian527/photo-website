const AboutUs = () => (
    <section className="min-h-96 w-full bg-amber-300 flex flex-wrap px-6 lg:px-24 py-12">
        <div className="lg:w-1/2 p-6">
            <h2 className="uppercase text-8xl lg:text-9xl text-amber-800">About Us</h2>
            <p className=" text-xl text-amber-900 mt-20">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis obcaecati perferendis, quisquam porro eveniet suscipit magnam odit, inventore ipsam repellat molestiae. Ea odio amet animi sapiente aut repellendus voluptates.
            </p>
            <p className=" text-xl text-amber-900 mt-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis obcaecati perferendis, quisquam porro eveniet suscipit magnam odit, inventore ipsam repellat molestiae. Ea odio amet animi sapiente aut repellendus voluptates.
            </p>
            <p className=" text-xl text-amber-900 mt-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis obcaecati perferendis, quisquam porro eveniet suscipit magnam odit, inventore ipsam repellat molestiae. Ea odio amet animi sapiente aut repellendus voluptates.
            </p>
        </div>
        <div className="lg:w-1/2 p-6 pt-16 lg:pt-36 mx-auto">
            <figure className="w-96 lg:w-auto h-96">
                <img className=" w-full h-full object-cover rounded-2xl" src="https://picsum.photos/id/2/5000/3333" alt="Description" />
                <figcaption className="pt-4 uppercase text-orange-900">Author: Todays author</figcaption>
            </figure>
            <figure className="w-96 lg:w-auto h-96 mt-24">
                <img className=" w-full h-full object-cover rounded-2xl" src="https://picsum.photos/id/8/5000/3333" alt="Description" />
                <figcaption className="pt-4 uppercase text-orange-900">Author: Todays author</figcaption>
            </figure>
        </div>
    </section>
)

export default AboutUs;