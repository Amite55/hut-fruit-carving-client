
import a from '../../assets/images/australia.png';
import b from '../../assets/images/color.png';
import c from '../../assets/images/brand-engagement.png';
import d from '../../assets/images/public-service.png';
import e from '../../assets/images/oil-paint.png';
import f from '../../assets/images/fast-delivery.png';

const Categories = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="my-5 text-center px-12 space-y-5">
            <h2 className="text-3xl font-bold font-mono mb-10">WHY CHOOSE PICASSO ART & CRAFT</h2>
            <p>At Picasso Art & Craft, we offer more than just the best selection of art and craft supplies around. While that’s our main aim, it’s only one piece of the mosaic of Picasso Art & Craft! Here you’ll find everything you need supplies-wise and inspiration-wise, and all from an Australian-owned store with Australia-wide shipping. No matter your creative style of choice, we’ve got something just for you, and we’ll get it to you quickly and easily. </p>

            <p>If you’re looking for a large range of quality products no matter your artistic area of interest, we’ve got you covered. Whether you’re just starting your creative journey or have been at it for decades, we pride ourselves on being your one-stop shop for supplies, innovation, and advice. We take the time to perfectly mix global community, inspiration, and creativity to share our passion and help you engage in yours.</p>
            </div>

            <div className="grid md:grid-cols-3 my-5 gap-6 px-6">
                <div className=" shadow-lg  py-3 px-5 text-center bg-[#F4F3F0] space-y-2">
                    <div>
                        <img className='mx-auto' src={a} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Australian Owned</h2>
                        <p className='font-light'>Based in Western Australia with three branches across Perth, we’re a proudly Australian-owned business</p>
                    </div>
                </div>
                <div className="shadow-lg  py-3 px-5 text-center bg-[#F4F3F0] space-y-2">
                    <div>
                        <img className='mx-auto' src={b} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Extensive Selection</h2>
                        <p className='font-light'>With over 300 yarn products, close to 700 paint products, and over 200 colouring and sketching products, we have over 4,000 art and craft products for you to choose from.  </p>
                    </div>
                </div>
                <div className="shadow-lg  py-3 px-5 text-center bg-[#F4F3F0] space-y-2">
                    <div>
                        <img className='mx-auto' src={c} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Quality Brands</h2>
                        <p className='font-light'>It’s not just about quantity— high-quality brands are just as important. We stock well-known and respected brands such as Krafter’s Korner, Art Spectrum, and Mod Podge.</p>
                    </div>
                </div>
                <div className="shadow-lg  py-3 px-5 text-center bg-[#F4F3F0] space-y-2">
                    <div>
                        <img className='mx-auto' src={d} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Customer Focused</h2>
                        <p className='font-light'>As well as traditional art and craft, we’re also crafting the art of fantastic customer service that will help you feel right at home.</p>
                    </div>
                </div>
                <div className="shadow-lg  py-3 px-5 text-center bg-[#F4F3F0] space-y-2">
                    <div>
                        <img className='mx-auto' src={e} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Catering For All Creatives</h2>
                        <p className='font-light'>Oil paint, fabric dye, clay tools, or something completely unique, we cater to all explorers in the vast creative space.</p>
                    </div>
                </div>
                <div className="shadow-lg  py-3 px-5 text-center bg-[#F4F3F0] space-y-2">
                    <div>
                        <img className='mx-auto' src={f} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Fast Australia-Wide Deliveryd</h2>
                        <p className='font-light'>We offer fast Australia-wide delivery directly from our Perth store so you can receive your supplies and get started on your masterpiece as soon as possible.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;