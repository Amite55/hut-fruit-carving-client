

const FAQ = () => {
    return (
        <div className="my-4 max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-green-500 my-5">FREQUENTLY ASKED QUESTIONS</h1>

            <div className="px-14 space-y-3">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Why Should You Buy Art and Craft Online In Australia From Picasso Art & Supplies?
                    </div>
                    <div className="collapse-content">
                        <p>There are some reasons why you should buy art and craft online from Picasso Art & Supplies
                            <br />
                            We’re a proudly Australian-owned business with three branches across Perth.
                            <br />
                            We have over 4,000 art & craft products for you to choose from.
                            <br />
                            We stock high-quality, well-known, and respected brands such as Krafter’s Korner, Art Spectrum, and Mod Podge.
                            <br />
                            As well as traditional arts and crafts, we’re also crafting the art of fantastic customer service that will make you feel right at home.
                            <br />
                            It’s oil paint, fabric dye, clay tools, or something unique, we cater to all explorers in the vast creative space.
                            <br />
                            We offer fast Australia-wide delivery directly from our Perth store, so you can receive your supplies and get started on your masterpiece as soon as possible.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What Makes Us The First Choice To Buy Art and Craft Online In Australia?
                    </div>
                    <div className="collapse-content">
                        <p>Picasso Art and Crafts is an Australian-owned retail store that offers a vast selection of art, crafts, and other merchandise to a broad demographic of customers. We are based in Western Australia and have three branches across Perth. We are devoted to being our customer’s first choice for product selection, value, and service that inspires and fulfills unlimited creative possibilities.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Are Return And Exchange Available On Buying Art and Craft Online From Picasso Art & Supplies?
                    </div>
                    <div className="collapse-content">
                        <p>Here at Picasso Art and Craft, we believe that in order to have the best possible online shopping experience, you should be able to return your unused product by buying paint online or at our store.
                            To know more visit our Return Policy Page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;