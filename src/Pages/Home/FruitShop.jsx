import shopImage from '../../assets/images/shop.jpg';
const FruitShop = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={shopImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-3'>
                        <h1 className="text-3xl font-bold text-center">ONLINE ART AND CRAFT SUPPLIES IN AUSTRALIA</h1>
                        <p className="py-6">With our online art supplies store in Australia, you can browse our wide selection of art supplies, including paints, brushes, canvases, and more, with ease and convenience. We provide free shipping on all most orders, and you can also take advantage of our discount codes to save even more. Our online art supplies in Australia are the perfect way to shop for art and craft supplies without leaving the comfort of your own home.</p>
                        <p className="py-6">Our goal is to develop long-term relationships with our clients by delivering expert service and professional advice. We take the time to ask our customers questions and listen to what they want to achieve, to ensure we provide them with the best products for their needs. Our art and craft supplies online store is committed to assisting artists in creating the ideal masterpiece and carrying the best art equipment available. In our shop, you may find various products, including paints, pencils, clay, canvases, paper, and everything in between. shop online our art and craft products online at fair rates.
                            We look forward to having you <span className='font-bold'>shop arts and crafts online</span> Or in-store soon with us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FruitShop;