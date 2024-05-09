import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import AllCrafts from './AllCrafts';
import Categories from './Categories';
import FruitShop from './FruitShop';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
    const crafts = useLoaderData();
    return (
        <div>
            <Banner />

            <div className='bg-[#8b8b8b] py-9 px-5 rounded-lg'>
                <h1 className="text-4xl mx-auto text-center my-5 font-bold font-mono">All Craft Categories</h1>
                <div className='grid md:grid-cols-3 max-w-6xl mx-auto gap-3 '>
                    {
                        crafts.map(craft => < AllCrafts key={craft._id} craft={craft}></AllCrafts>)
                    }

                </div>
            </div>
            <Categories/>
            <FruitShop/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Home;